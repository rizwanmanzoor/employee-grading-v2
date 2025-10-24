import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import HowToUsePage from "@/pages/HowToUsePage";
import LoginPage from "@/pages/LoginPage";
import NotFound from "@/pages/NotFound";
import ProgressPage from "@/pages/ProgressPage";
import ResultPage from "@/pages/ResultPage";
import StepperForm from "@/pages/StepperForm";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route element={<RootLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/grading" element={<StepperForm />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/how-to-use" element={<HowToUsePage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
