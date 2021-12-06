import React, {useCallback, useEffect, useState} from 'react';
import cn from 'classnames';
import {api} from './api/api';
import Header from './components/header/header';
import Loading from './components/loading/loading';
import Cards from './components/cards/cards';
import TmvReport from './components/tmv/tmv';
import {TABS, TAB_KEY} from './core/tabs/tabs';
import Tabs from './components/tabs/tabs';
import Inventory from './components/inventory/inventory';

import * as bootstrapStyles from './styles/bootstrap.module.scss';
import * as customStyles from './styles/custom.module.css';
import * as styles from './widget.module.css';

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
          <p style={{color: '#333'}} className={cn(bootstrapStyles['fs-5'])}>
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
        <div
          className={cn(
            bootstrapStyles['w-100'],
            styles['edm-ext-widget_loading'],
            bootstrapStyles['d-flex'],
            bootstrapStyles['align-items-center'],
            bootstrapStyles['justify-content-center']
          )}
        >
          <Loading />
        </div>
      );
    }

    return (
      <div>
        <div>
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
    <div className={cn(bootstrapStyles['edm-ext'], styles['edm-ext-floating'], styles['edm-ext'])}>
      <div
        className={cn(
          bootstrapStyles['shadow-sm'],
          bootstrapStyles.rounded,
          bootstrapStyles['bg-white'],
          styles['edm-ext-widget']
        )}
      >
        <Header title="Edmunds helper" onClose={onClose} />
        <main className={cn(styles['edm-ext-widget_main'], customStyles['p-2_5'])}>
          {renderContent()}
        </main>
        <Tabs tabs={TABS} activeTabKey={activeTabKey} onTabClick={setActiveTabKey} />
      </div>
    </div>
  );
}
