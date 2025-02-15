import { appendUrlPath } from "../../utils/path";
import logo from "../../assets/logo.png";

type LogoProps = {
  size: number;
};

export function Logo({ size }: LogoProps) {
  return (
    <div
      style={{
        height: size * 0.3,
        width: size,
        transform: "translate(0,-65%)",
      }}
      className="hover:animate-bounce"
    >
      <a href={appendUrlPath("/")}>
        <img
          src={appendUrlPath(logo.src)}
          alt={"App logo"}
          width={size}
          height={size}
          style={{
            objectFit: "contain",
            userSelect: "none",
          }}
        />
      </a>
    </div>
  );
}
