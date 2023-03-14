import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('Главная страница')}</h1>
    </div>
  );
});

export default MainPage;
