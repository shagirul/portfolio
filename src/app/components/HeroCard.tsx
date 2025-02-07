import { Braces, Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export default function HeroCard() {
  return (
    <div className="h-full w-full flex flex-col  flex-grow-0 justify-between gap-6">
      <div className="w-full aspect-[9/12] lg:aspect-[4/3] bg-mygray-200 max-h-[50vh] rounded-lg"></div>
      <div className="flex flex-col gap-3">
        <p className="uppercase font-bold text-5xl leading-[90%]">
          shagirul <br></br>hassan
        </p>
        <div className="flex lg:flex-col lg:w-full w-fit gap-4">
          <div className="flex gap-3 items-end">
            <Mail className="text-orange-accent" />{" "}
            <p className="hidden lg:block text-base font-medium text-mygray-300 leading-tight">
              shagirul@gmail.com
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <Phone className="text-orange-accent" />{" "}
            <p className="hidden lg:block text-base font-medium text-mygray-300 leading-tight">
              +918860048782
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <Linkedin className="text-orange-accent" />{" "}
            <p className="hidden lg:block text-base font-medium text-mygray-300 leading-tight">
              linkedin.com/in/shagirul-hassan
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <Twitter className="text-orange-accent" />{" "}
            <p className="hidden lg:block text-base font-medium text-mygray-300 leading-tight">
              Twitter/shagirul
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <Github className="text-orange-accent" />{" "}
            <p className="hidden lg:block text-base font-medium text-mygray-300 leading-tight">
              https://github.com/shagirul
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.181 17.9286L13.484 20.5356C13.018 21.0026 12.373 21.1976 11.661 21.1976C10.949 21.1976 10.304 21.0026 9.837 20.5356L5.505 16.1726C5.038 15.7056 4.803 15.0226 4.803 14.3096C4.803 13.5966 5.038 12.9526 5.505 12.4856L9.824 8.10565C10.291 7.63865 10.949 7.46065 11.661 7.46065C12.373 7.46065 13.018 7.65565 13.484 8.12265L16.181 10.7286C16.695 11.2436 17.546 11.2256 18.081 10.6906C18.616 10.1546 18.634 9.30365 18.12 8.78965L15.511 6.15365C14.8374 5.4877 13.9902 5.02443 13.066 4.81665L15.533 2.31365C16.049 1.79965 16.031 0.947645 15.496 0.412645C14.961 -0.122355 14.109 -0.139355 13.594 0.374645L3.494 10.4756C2.513 11.4576 2 12.8126 2 14.3106C2 15.8086 2.513 17.2056 3.494 18.1856L7.841 22.5466C8.822 23.5256 10.178 23.9986 11.675 23.9986C13.172 23.9986 14.528 23.4866 15.51 22.5046L18.119 19.8676C18.633 19.3536 18.615 18.5026 18.08 17.9676C17.545 17.4326 16.694 17.4146 16.181 17.9286ZM20.89 13.0086H10.745C10.043 13.0086 9.475 13.6126 9.475 14.3546C9.475 15.0966 10.043 15.7006 10.745 15.7006H20.89C21.591 15.7006 22.16 15.0966 22.16 14.3546C22.16 13.6126 21.591 13.0086 20.89 13.0086Z"
                fill="#F36B39"
              />
            </svg>

            <p className="hidden lg:block text-base font-medium text-mygray-300 leading-tight">
              Leetcode/shagirul
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <Braces /> */
}
