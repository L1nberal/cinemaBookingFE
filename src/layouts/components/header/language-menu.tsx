import { useTranslation } from 'react-i18next';
import { Button } from '../../../components';

const languages = [
  { name: 'english', languageCode: 'en' },
  { name: 'vietnamese', languageCode: 'vi' },
];

export const LanguageMenu = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className='language-menu-wrapper absolute top-[100%] right-0 z-20 bg-white w-[150px] hidden'>
      {languages?.map((language) => (
        <Button
          className='w-[100%] !ml-0 hover:bg-[#cccccc] active:bg-[#7f7f7f] rounded-none first-letter:capitalize'
          variant='link'
          color='success'
          callbackFC={() => handleChangeLanguage(language.languageCode)}
          key={language.languageCode}
        >
          {t(language.name)}
        </Button>
      ))}
    </div>
  );
};
