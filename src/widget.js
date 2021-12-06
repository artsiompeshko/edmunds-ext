import React, {useCallback, useEffect, useState} from 'react';
import {api} from './api/api';
import Header from './components/header/header';
import Loading from './components/loading/loading';
import './widget.css';
import Cards from './components/cards/cards';
import TmvReport from './components/tmv/tmv';
import {TABS, TAB_KEY} from './core/tabs/tabs';
import Tabs from './components/tabs/tabs';
import Inventory from './components/inventory/inventory';

export function Widget({vin}) {
  const [vehicle, setVehicle] = useState(null);
  const [zipcode, setZipcode] = useState(null);
  const [invenotries, setInventories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(true);
  const [activeTabKey, setActiveTabKey] = useState(TABS[0].key);

  async function loadVehicle() {
    const vehicle = await api.loadVehicle(vin);

    setVehicle(vehicle);
  }

  async function getZipCode() {
    const zipcode = await api.getZipCode();

    setZipcode(zipcode);
  }

  async function loadSimilar() {
    const inventories = await api.loadSimilar({zip: zipcode, radius: 50, ...vehicle});

    setInventories(inventories);
    setLoading(false);
  }

  useEffect(() => {
    loadVehicle();
  }, []);

  useEffect(() => {
    getZipCode();
  }, []);

  useEffect(() => {
    if (zipcode && vehicle) {
      loadSimilar();
    }
  }, [vehicle, zipcode]);

  const onClose = useCallback(() => {
    setOpened(false);
  }, [setOpened]);

  const renderTab = () => {
    if (activeTabKey === TAB_KEY.TMV) {
      return (
        <>
          <TmvReport maxFairPrice={100} maxGreatPrice={80} price={110} />
          <p style={{color: '#333'}} className="fs-5">
            Other options near you:
          </p>
          <Cards invenotries={invenotries} />
        </>
      );
    }

    if (activeTabKey === TAB_KEY.REVIEWS) {
      return <>REVIEWS</>;
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="w-100 edm-ext-widget_loading d-flex align-items-center justify-content-center">
          <Loading />
        </div>
      );
    }

    return (
      <div>
        <div className="edm-ext-widget_tab">
          <div>
            <Inventory vehicle={vehicle} />
          </div>
          {renderTab()}
        </div>
      </div>
    );
  };

  if (!opened) {
    return null;
  }

  return (
    <div className="edm-ext edm-ext-floating">
      <div className="shadow-sm rounded bg-white edm-ext-widget">
        <Header title="Edmunds helper" onClose={onClose} />
        <main className="edm-ext-widget_main p-2_5">{renderContent()}</main>
        <Tabs tabs={TABS} activeTabKey={activeTabKey} onTabClick={setActiveTabKey} />
      </div>
    </div>
  );
}
