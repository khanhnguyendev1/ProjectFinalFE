import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, ProductsPage } from "./pages";
import AppLayout from "./components/AppLayout";
import "@/i18n/i18n";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
