function Header({ rateCurrencies }) {
  return (
    <header>
      <div className="flex justify-center gap-x-2 py-4 text-center text-xl text-gray-600">
        <span>Курс валют</span>
        <div className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mt-1 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            />
          </svg>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center gap-4">
        {rateCurrencies.map(
          (currency) =>
            currency.cc === "UAH" || (
              <div
                key={currency.cc}
                className="relative flex flex-wrap items-center space-x-3 rounded-lg border border-gray-300 bg-white bg-gradient-to-br from-sky-50 to-yellow-50 py-2 px-3 shadow-sm "
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 text-2xl">
                    {currency.symbol}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{currency.txt}</p>
                  <p className="truncate text-sm text-gray-500">{currency.rate}</p>
                </div>
              </div>
            )
        )}
      </div>
    </header>
  );
}

export default Header;
