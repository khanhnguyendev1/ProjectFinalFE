import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const LanguageSelect = () => {
  const { i18n, t } = useTranslation();
  const [selectedLng, setSelectedLng] = useState<string | null>(
    localStorage.getItem("language")
  );

  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLng(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage); // Ensure language matches stored value on load
    } else {
      setSelectedLng(i18n.language); // Fallback to current i18n language if no stored language
    }
  }, [i18n]);

  return (
    <Select
      className="w-[150px]"
      value={selectedLng || i18n.language} // Use selectedLng or fallback to i18n language
      onChange={changeLng}
      options={[
        { value: "vi", label: t("vi") },
        { value: "en", label: t("en") },
      ]}
    />
  );
};

export default LanguageSelect;
