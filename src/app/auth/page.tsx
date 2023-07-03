import LoginForm from "@/forms/LoginForm";
import RegisterForm from "@/forms/RegisterForm";

const AuthPage = () => {
  return (
    <div className=" max-w-[1280px] mx-auto flex py-24">
      <div className="max-w-[50%] px-8">
        <h3 className="text-[32px] leading-[54px] uppercase font-bold mb-5">
          Đăng nhập
        </h3>
        <p className="text-[14px] leading-5 text-text mb-8">
          Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và
          nhận được những ưu đãi tốt hơn!
        </p>
        <LoginForm />
      </div>
      <div className="w-[1px] bg-text"></div>
      <div className="max-w-[50%] px-8">
        <h3 className="text-[32px] leading-[54px] uppercase font-bold mb-5">
          Đăng ký
        </h3>
        <p className="text-[14px] leading-5 text-text">
          Hãy đăng ký ngay để tích lũy điểm thành viên và nhận được những ưu đãi
          tốt hơn!
        </p>
        <RegisterForm />
      </div>
    </div>
  );
};

export default AuthPage;
