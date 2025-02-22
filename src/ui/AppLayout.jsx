import { Outlet, useNavigation } from "react-router-dom";

import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import LoadingIndicator from "./LoadingIndicator";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <LoadingIndicator />}
      {/* {true && <LoadingIndicator />} */}

      <Header />

      <div className="no-scrollbar overflow-scroll">
        <main className="no-scrollbar mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
