const TitlePage = ({children}) => {
  return (
    <div className="relative bg-breadcrumb bg-center bg-sky-900 bg-blend-overlay h-52 opacity-80">
      <div className="h-full flex flex-col justify-around items-start md:flex-row md:justify-between md:items-center px-5">
        {children}
      </div>
    </div>
  );
};

export default TitlePage;
