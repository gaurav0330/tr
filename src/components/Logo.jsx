import { useTheme } from "../../contexts/ThemeContext.jsx";

export default function Logo({ className = "h-16 w-auto" }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={className} aria-label="Logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 375 375"
        className="w-full h-full"
        dangerouslySetInnerHTML={{
          __html: isDarkMode
            ? `<defs><g/><clipPath id="7dd3e7ac2c"><path d="M 27.460938 148.421875 L 91.210938 148.421875 L 91.210938 229.210938 L 27.460938 229.210938 Z M 27.460938 148.421875 " clip-rule="nonzero"/></clipPath><clipPath id="a8170a3587"><path d="M 28 150 L 96 150 L 96 225 L 28 225 Z M 28 150 " clip-rule="nonzero"/></clipPath><clipPath id="ad55b3622f"><path d="M 30.703125 148.339844 L 101.691406 154.460938 L 95.574219 225.445312 L 24.585938 219.328125 Z M 30.703125 148.339844 " clip-rule="nonzero"/></clipPath><!-- more content... --></defs>`
            : `<defs><g/><clipPath id="6312a91b1b"><path d="M 27.136719 147.109375 L 90.886719 147.109375 L 90.886719 227.898438 L 27.136719 227.898438 Z M 27.136719 147.109375 " clip-rule="nonzero"/></clipPath><clipPath id="83eb217779"><path d="M 28 151 L 96 151 L 96 226 L 28 226 Z M 28 151 " clip-rule="nonzero"/></clipPath><clipPath id="7396e35e66"><path d="M 30.703125 148.859375 L 101.691406 154.976562 L 95.574219 225.964844 L 24.585938 219.84375 Z M 30.703125 148.859375 " clip-rule="nonzero"/></clipPath><!-- more content... --></defs>`
        }}
      />
    </div>
  );
}
