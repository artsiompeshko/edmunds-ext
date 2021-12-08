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
import Reviews from './components/reviews/reviews';

import * as bootstrapStyles from './styles/bootstrap.module.scss';
import * as customStyles from './styles/custom.module.scss';
import * as styles from './widget.module.scss';

export function Widget({vin, price}) {
  const [vehicle, setVehicle] = useState(null);
  const [review, setReview] = useState(null);
  const [tmv, setTmv] = useState(null);
  const [invenotries, setInventories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [opened, setOpened] = useState(true);
  const [activeTabKey, setActiveTabKey] = useState(TABS[0].key);

  async function loadData() {
    const data = await api.loadData(vin);

    if (!data) {
      setLoading(false);
      setError('Not enough data to display');
    }

    setVehicle({
      vin,
      displayPrice: price,
      ...(data.vehicle || {})
    });
    setInventories(data.similarVehicles);
    setReview(data.vehicleReview);
    setTmv(data.tmv);

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  const onClose = useCallback(() => {
    setOpened(false);
  }, [setOpened]);

  const renderTab = () => {
    if (activeTabKey === TAB_KEY.TMV) {
      return (
        <>
          <TmvReport {...tmv} price={vehicle.displayPrice} />
          <p
            style={{fontSize: '20px', color: '#333'}}
            className={cn(bootstrapStyles['mt-4'], bootstrapStyles['mb-2'])}
          >
            Other options near you:
          </p>
          <Cards invenotries={invenotries} inventory={vehicle} />
        </>
      );
    }

    if (activeTabKey === TAB_KEY.REVIEWS) {
      return (
        <>
          <Reviews review={review} />
        </>
      );
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
          <div className={styles['edm-ext-inventory']}>
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
    <div className="edm-widget-reset">
      <div
        className={cn(bootstrapStyles['edm-ext'], styles['edm-ext-floating'], styles['edm-ext'])}
      >
        <div
          className={cn(
            bootstrapStyles.shadow,
            bootstrapStyles.rounded,
            bootstrapStyles['bg-white'],
            bootstrapStyles['overflow-hidden'],
            styles['edm-ext-widget']
          )}
        >
          <Header title="Edmunds helper" onClose={onClose} />
          <main
            className={cn(
              styles['edm-ext-widget_main'],
              customStyles['p-widget'],
              bootstrapStyles['pt-0']
            )}
            style={{paddingTop: '0'}}
          >
            {renderContent()}
          </main>
          <Tabs tabs={TABS} activeTabKey={activeTabKey} onTabClick={setActiveTabKey} />
        </div>
      </div>
    </div>
  );
}
