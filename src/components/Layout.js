import Header from "./Header";
import Loader from "./Loader";

function Layout({ rateCurrencies, isLoading, children }) {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-sky-200 to-yellow-200">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header rateCurrencies={rateCurrencies} />
          <main className="mx-auto  flex-1 px-6 lg:px-8">{children}</main>
        </>
      )}
    </div>
  );
}

export default Layout;
