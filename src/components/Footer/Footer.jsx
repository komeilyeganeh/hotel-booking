import FooterLinks from "./FooteerLinks";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between p-8 bg-slate-600">
      <div className="w-full mt-7 md:w-2/5">
        <h3 className="text-lg lg:text-2xl text-orange-300">هتلیران</h3>
        <p className="mt-6 text-sm lg:text-md leading-7 text-gray-100 text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
      </div>
      <div className="w-full mt-7 md:w-2/12">
          <h3 className="text-base lg:text-2xl text-orange-300">لینک های مفید</h3>
          <FooterLinks />
      </div>
      <div className="w-full mt-7 md:w-2/6">
      <h3 className="text-base lg:text-2xl text-orange-300"> شبکه های اجتماعی</h3>
      <div className="flex gap-x-4 mt-6 text-sm md:text-base text-white">
          <FooterSocial />
      </div>
      </div>
    </footer>
  );
};

export default Footer;
