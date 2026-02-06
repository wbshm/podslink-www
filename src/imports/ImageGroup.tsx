import imgObject from "figma:asset/33c660328585b48e4baf2ebc2234da2f3ecc8371.png";

export default function ImageGroup() {
  return (
    <div className="relative size-full" data-name="Image Group">
      <div className="absolute h-[132.26px] left-0 top-0 w-[152px]" data-name="Object">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.63%] left-[0.19%] max-w-none top-[0.18%] w-[99.78%]" src={imgObject} />
        </div>
      </div>
    </div>
  );
}