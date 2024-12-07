import { clsx } from "utils/common"

type LogoTextProps = {
  className?: string
}
export function LogoText({ className }: LogoTextProps) {
  return (
    <svg
      width="71"
      height="25"
      viewBox="0 0 71 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, "text-primary")}
    >
      <path
        d="M9.54541 16.8181L16.8181 9.54541H24.0909V16.8181H16.8181V24.0909H9.54541V16.8181Z"
        fill="currentColor"
      />
      <path
        d="M15.4546 8.18186L8.18186 15.4546L0.909136 15.4546L0.909135 8.18186L8.18186 8.18186L8.18186 0.909136L15.4546 0.909136L15.4546 8.18186Z"
        fill="currentColor"
      />
      <circle cx="20.909" cy="4.09091" r="4.09091" fill="currentColor" />
      <circle cx="4.09091" cy="20.909" r="4.09091" fill="currentColor" />
      <path
        d="M34.0114 18V6.36364H38.6023C39.4848 6.36364 40.2367 6.5322 40.858 6.86932C41.4792 7.20265 41.9527 7.66667 42.2784 8.26136C42.608 8.85227 42.7727 9.53409 42.7727 10.3068C42.7727 11.0795 42.6061 11.7614 42.2727 12.3523C41.9394 12.9432 41.4564 13.4034 40.8239 13.733C40.1951 14.0625 39.4337 14.2273 38.5398 14.2273H35.6136V12.2557H38.142C38.6155 12.2557 39.0057 12.1742 39.3125 12.0114C39.6231 11.8447 39.8542 11.6155 40.0057 11.3239C40.161 11.0284 40.2386 10.6894 40.2386 10.3068C40.2386 9.92045 40.161 9.58333 40.0057 9.29545C39.8542 9.00379 39.6231 8.77841 39.3125 8.61932C39.0019 8.45644 38.608 8.375 38.1307 8.375H36.4716V18H34.0114ZM55.0639 12.1818C55.0639 13.4508 54.8234 14.5303 54.3423 15.4205C53.8651 16.3106 53.2135 16.9905 52.3878 17.4602C51.5658 17.9261 50.6416 18.1591 49.6151 18.1591C48.581 18.1591 47.6529 17.9242 46.831 17.4545C46.009 16.9848 45.3594 16.3049 44.8821 15.4148C44.4048 14.5246 44.1662 13.447 44.1662 12.1818C44.1662 10.9129 44.4048 9.83333 44.8821 8.94318C45.3594 8.05303 46.009 7.375 46.831 6.90909C47.6529 6.43939 48.581 6.20455 49.6151 6.20455C50.6416 6.20455 51.5658 6.43939 52.3878 6.90909C53.2135 7.375 53.8651 8.05303 54.3423 8.94318C54.8234 9.83333 55.0639 10.9129 55.0639 12.1818ZM52.5696 12.1818C52.5696 11.3598 52.4465 10.6667 52.2003 10.1023C51.9579 9.53788 51.6151 9.10985 51.1719 8.81818C50.7287 8.52652 50.2098 8.38068 49.6151 8.38068C49.0204 8.38068 48.5014 8.52652 48.0582 8.81818C47.6151 9.10985 47.2704 9.53788 47.0241 10.1023C46.7817 10.6667 46.6605 11.3598 46.6605 12.1818C46.6605 13.0038 46.7817 13.697 47.0241 14.2614C47.2704 14.8258 47.6151 15.2538 48.0582 15.5455C48.5014 15.8371 49.0204 15.983 49.6151 15.983C50.2098 15.983 50.7287 15.8371 51.1719 15.5455C51.6151 15.2538 51.9579 14.8258 52.2003 14.2614C52.4465 13.697 52.5696 13.0038 52.5696 12.1818ZM56.8864 6.36364H59.9205L63.125 14.1818H63.2614L66.4659 6.36364H69.5V18H67.1136V10.4261H67.017L64.0057 17.9432H62.3807L59.3693 10.3977H59.2727V18H56.8864V6.36364Z"
        fill="currentColor"
      />
    </svg>
  )
}
