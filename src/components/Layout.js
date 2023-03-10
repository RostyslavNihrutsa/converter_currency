function Layout({ children }) {
  return (
    <div className='bg-gradient-to-br from-sky-200 to-yellow-200 h-screen'>
      <div className="mx-auto max-w-7xl sm:px-6 h-full lg:px-8">{children}</div>
    </div>
  );
}

export default Layout;
