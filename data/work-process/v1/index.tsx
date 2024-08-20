import { WorkprocessSectionProps } from '@/src/sections/work-process/v1';

export const workprocessSectionData: WorkprocessSectionProps = {
  texts: [
    'Custom Software Development',
    'IT Consulting',
    'IT Outsourcing',
    'Mobile App Development',
    'Web Development',
    'Blockchain Development',
    'UI/UX Design',
    'Quality Assurance and Testing',
    'Cloud Application Development',
    'E-commerce Solutions',
    'Database Development and Integration',
    'Enterprise Software Solutions',
    'IoT (Internet of Things) Development'
  ],
  cards: [
    {
      icon: <Icon1 />,
      title: 'Innovation',
      description:
        'We embrace creativity and innovation, constantly exploring new technologies to deliver cutting-edge solutions',
      count: '01',
      link: '',
    },
    {
      icon: <Icon2 />,
      title: 'Integrity',
      description:
        'We conduct our business with the highest level of integrity, ensuring transparency and honesty in all our interactions',
      count: '02',
      link: '',
    },
    {
      icon: <Icon3 />,
      title: 'Excellence',
      description:
        'We are committed to excellence, delivering high-quality solutions that exceed client expectations',
      count: '03',
      link: '',
    },
    {
      icon: <Icon4 />,
      title: 'Customer-Centricity',
      description:
        'We prioritize our clients needs, working collaboratively to deliver customized solutions that drive success',
      count: '04',
      link: '',
    },
    {
      icon: <Icon2 />,
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork, fostering a collaborative environment that encourages knowledge sharing and growth',
      count: '05',
      link: '',
    },
  ],
};

function Icon1() {
  return (
    <svg
      width={65}
      height={66}
      viewBox="0 0 65 66"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M60.9375 30.9651H52.8125V22.8401C52.8071 20.7091 52.4713 18.5918 51.8172 16.5636L60.3484 8.03233C60.7309 7.64984 60.9458 7.13107 60.9458 6.59014C60.9458 6.04922 60.7309 5.53045 60.3484 5.14796C59.9659 4.76547 59.4472 4.55058 58.9062 4.55058C58.3653 4.55058 57.8466 4.76547 57.4641 5.14796L50.0094 12.6839C48.2159 9.63409 45.6569 7.10563 42.5858 5.34887C39.5147 3.5921 36.0381 2.66797 32.5 2.66797C28.9619 2.66797 25.4852 3.5921 22.4142 5.34887C19.3431 7.10563 16.7841 9.63409 14.9906 12.6839L7.53594 5.14796C7.34655 4.95857 7.12171 4.80833 6.87426 4.70584C6.62681 4.60334 6.36159 4.55058 6.09375 4.55058C5.82591 4.55058 5.56069 4.60334 5.31324 4.70584C5.06579 4.80833 4.84095 4.95857 4.65156 5.14796C4.26907 5.53045 4.05419 6.04922 4.05419 6.59014C4.05419 7.13107 4.26907 7.64984 4.65156 8.03233L13.1828 16.5636C12.5287 18.5918 12.1929 20.7091 12.1875 22.8401V30.9651H4.0625C3.52378 30.9651 3.00712 31.1791 2.62619 31.5601C2.24526 31.941 2.03125 32.4577 2.03125 32.9964C2.03125 33.5351 2.24526 34.0518 2.62619 34.4327C3.00712 34.8136 3.52378 35.0276 4.0625 35.0276H12.1875V43.1526C12.1929 45.2837 12.5287 47.401 13.1828 49.4292L4.65156 57.9605C4.26907 58.343 4.05419 58.8617 4.05419 59.4026C4.05419 59.9436 4.26907 60.4623 4.65156 60.8448C5.03405 61.2273 5.55282 61.4422 6.09375 61.4422C6.63468 61.4422 7.15345 61.2273 7.53594 60.8448L14.9906 53.3089C16.7841 56.3587 19.3431 58.8872 22.4142 60.6439C25.4852 62.4007 28.9619 63.3248 32.5 63.3248C36.0381 63.3248 39.5147 62.4007 42.5858 60.6439C45.6569 58.8872 48.2159 56.3587 50.0094 53.3089L57.4641 60.7636C57.8466 61.1461 58.3653 61.361 58.9062 61.361C59.4472 61.361 59.9659 61.1461 60.3484 60.7636C60.7309 60.3811 60.9458 59.8623 60.9458 59.3214C60.9458 58.7805 60.7309 58.2617 60.3484 57.8792L51.8172 49.348C52.4631 47.3457 52.7988 45.2564 52.8125 43.1526V35.0276H60.9375C61.4762 35.0276 61.9929 34.8136 62.3738 34.4327C62.7547 34.0518 62.9688 33.5351 62.9688 32.9964C62.9688 32.4577 62.7547 31.941 62.3738 31.5601C61.9929 31.1791 61.4762 30.9651 60.9375 30.9651ZM32.5 6.59014C36.4554 6.59373 40.2738 8.03989 43.2392 10.6575C46.2046 13.2751 48.1134 16.8845 48.6078 20.8089H16.3922C16.8866 16.8845 18.7955 13.2751 21.7608 10.6575C24.7262 8.03989 28.5446 6.59373 32.5 6.59014ZM34.5312 59.2605V30.9651C34.5312 30.4264 34.3172 29.9098 33.9363 29.5288C33.5554 29.1479 33.0387 28.9339 32.5 28.9339C31.9613 28.9339 31.4446 29.1479 31.0637 29.5288C30.6828 29.9098 30.4688 30.4264 30.4688 30.9651V59.2605C26.5443 58.766 22.935 56.8572 20.3174 53.8918C17.6997 50.9264 16.2536 47.1081 16.25 43.1526V24.8714H48.75V43.1526C48.7464 47.1081 47.3003 50.9264 44.6826 53.8918C42.065 56.8572 38.4557 58.766 34.5312 59.2605Z" />
    </svg>
  );
}

function Icon2() {
  return (
    <svg
      width={65}
      height={66}
      viewBox="0 0 65 66"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M27.6443 63.3015C27.2207 63.1202 26.8714 62.8003 26.6536 62.3943C26.4359 61.9883 26.3626 61.5203 26.4458 61.0672L30.0615 41.1203H12.1865C11.8135 41.1211 11.4475 41.0191 11.1286 40.8256C10.8097 40.6321 10.5502 40.3546 10.3786 40.0234C10.2215 39.7023 10.1519 39.3453 10.1768 38.9887C10.2018 38.632 10.3205 38.2883 10.5208 37.9922L34.8958 3.4609C35.1648 3.08207 35.5554 2.80688 36.0027 2.6812C36.4499 2.55553 36.9268 2.58697 37.3536 2.77028C37.7693 2.94147 38.1165 3.24571 38.3407 3.63535C38.5649 4.02498 38.6536 4.47799 38.5927 4.9234L34.9365 24.8703H52.8115C53.1845 24.8695 53.5505 24.9714 53.8693 25.1649C54.1882 25.3584 54.4477 25.636 54.6193 25.9672C54.7764 26.2883 54.846 26.6452 54.8211 27.0019C54.7961 27.3585 54.6775 27.7023 54.4771 27.9984L30.1021 62.5297C29.8448 62.9226 29.4593 63.2143 29.0112 63.3551C28.5631 63.4958 28.08 63.4769 27.6443 63.3015ZM16.1068 37.0578H32.499C32.7974 37.0573 33.0922 37.1226 33.3626 37.249C33.6329 37.3753 33.872 37.5597 34.063 37.789C34.2516 38.0186 34.3875 38.2867 34.4612 38.5745C34.5349 38.8623 34.5446 39.1627 34.4896 39.4547L32.0724 52.739L48.8911 28.9328H32.499C32.2005 28.9333 31.9057 28.868 31.6354 28.7416C31.365 28.6152 31.1259 28.4308 30.9349 28.2015C30.7463 27.972 30.6104 27.7039 30.5367 27.4161C30.463 27.1283 30.4533 26.8278 30.5083 26.5359L32.9255 13.2515L16.1068 37.0578Z" />
    </svg>
  );
}

function Icon3() {
  return (
    <svg
      width={65}
      height={66}
      viewBox="0 0 65 66"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M39.3237 63.3011L32.4987 60.437L25.6737 63.3011C25.2561 63.4782 24.7912 63.5105 24.3531 63.3927C23.9151 63.2748 23.529 63.0138 23.2566 62.6511L18.7878 56.7605L11.4347 55.8261C10.9853 55.7706 10.5673 55.5666 10.2471 55.2464C9.92697 54.9263 9.72295 54.5083 9.6675 54.0589L8.73312 46.7058L2.8425 42.237C2.47979 41.9646 2.21874 41.5785 2.10093 41.1404C1.98313 40.7024 2.01537 40.2375 2.1925 39.8198L5.05656 32.9948L2.1925 26.1698C2.01537 25.7522 1.98313 25.2873 2.10093 24.8492C2.21874 24.4112 2.47979 24.0251 2.8425 23.7527L8.73312 19.2839L9.6675 11.9308C9.72295 11.4814 9.92697 11.0634 10.2471 10.7432C10.5673 10.4231 10.9853 10.219 11.4347 10.1636L18.7878 9.22921L23.2566 3.33859C23.529 2.97589 23.9151 2.71483 24.3531 2.59703C24.7912 2.47923 25.2561 2.51146 25.6737 2.68859L32.4987 5.55265L39.3237 2.68859C39.7414 2.51146 40.2063 2.47923 40.6444 2.59703C41.0824 2.71483 41.4685 2.97589 41.7409 3.33859L46.2097 9.22921L53.5628 10.1636C54.0122 10.219 54.4302 10.4231 54.7503 10.7432C55.0705 11.0634 55.2745 11.4814 55.33 11.9308L56.2644 19.2839L62.155 23.7527C62.5177 24.0251 62.7788 24.4112 62.8966 24.8492C63.0144 25.2873 62.9821 25.7522 62.805 26.1698L59.9409 32.9948L62.805 39.8198C62.9821 40.2375 63.0144 40.7024 62.8966 41.1404C62.7788 41.5785 62.5177 41.9646 62.155 42.237L56.2644 46.7058L55.33 54.0589C55.2745 54.5083 55.0705 54.9263 54.7503 55.2464C54.4302 55.5666 54.0122 55.7706 53.5628 55.8261L46.2097 56.7605L41.7409 62.6511C41.4685 63.0138 41.0824 63.2748 40.6444 63.3927C40.2063 63.5105 39.7414 63.4782 39.3237 63.3011ZM33.23 56.3542L39.3237 58.9542L43.3862 53.612C43.5508 53.3998 43.7558 53.2223 43.9894 53.0898C44.223 52.9573 44.4806 52.8725 44.7472 52.8402L51.3691 51.987L52.2222 45.3652C52.2545 45.0985 52.3393 44.841 52.4718 44.6074C52.6043 44.3738 52.7818 44.1688 52.9941 44.0042L58.3362 39.9417L55.7362 33.848C55.5328 33.3394 55.5328 32.7721 55.7362 32.2636L58.3362 26.1698L52.9941 22.1073C52.7818 21.9428 52.6043 21.7378 52.4718 21.5042C52.3393 21.2706 52.2545 21.013 52.2222 20.7464L51.3691 14.1245L44.7472 13.2714C44.4806 13.2391 44.223 13.1542 43.9894 13.0218C43.7558 12.8893 43.5508 12.7118 43.3862 12.4995L39.3237 7.15734L33.23 9.75734C32.7215 9.96078 32.1542 9.96078 31.6456 9.75734L25.5519 7.15734L21.4894 12.4995C21.3248 12.7118 21.1198 12.8893 20.8862 13.0218C20.6526 13.1542 20.395 13.2391 20.1284 13.2714L13.5066 14.1245L12.6534 20.6245C12.6211 20.8911 12.5363 21.1487 12.4038 21.3823C12.2713 21.6159 12.0938 21.8209 11.8816 21.9855L6.53937 26.048L9.13937 32.1417C9.34281 32.6502 9.34281 33.2176 9.13937 33.7261L6.53937 39.8198L11.8816 43.8823C12.0938 44.0469 12.2713 44.2519 12.4038 44.4855C12.5363 44.7191 12.6211 44.9767 12.6534 45.2433L13.5066 51.8652L20.1284 52.7183C20.395 52.7506 20.6526 52.8354 20.8862 52.9679C21.1198 53.1004 21.3248 53.2779 21.4894 53.4902L25.5519 58.8323L31.6456 56.2323C31.9142 56.1424 32.198 56.1068 32.4805 56.1277C32.763 56.1487 33.0385 56.2257 33.2909 56.3542H33.23Z" />
      <path d="M28.6816 47.2153C28.3436 47.2169 28.0106 47.1341 27.7126 46.9745C27.4147 46.8149 27.1613 46.5835 26.9754 46.3012L18.6066 33.5653C18.4599 33.3412 18.3588 33.0904 18.309 32.8273C18.2592 32.5641 18.2617 32.2937 18.3164 32.0315C18.3711 31.7694 18.4769 31.5205 18.6278 31.2992C18.7787 31.0779 18.9716 30.8885 19.1957 30.7418C19.6482 30.4455 20.1999 30.3411 20.7294 30.4516C20.9916 30.5063 21.2404 30.6121 21.4617 30.763C21.683 30.9138 21.8724 31.1068 22.0191 31.3309L28.6816 41.4871L42.9004 19.6918C43.1967 19.2393 43.6606 18.923 44.1901 18.8125C44.7196 18.7021 45.2713 18.8065 45.7238 19.1027C46.1764 19.399 46.4927 19.863 46.6031 20.3925C46.7136 20.922 46.6092 21.4737 46.3129 21.9262L30.4691 46.3012C30.2759 46.5953 30.0096 46.8343 29.6962 46.9945C29.3829 47.1547 29.0333 47.2308 28.6816 47.2153Z" />
    </svg>
  );
}

function Icon4() {
  return (
    <svg
      width={65}
      height={66}
      viewBox="0 0 65 66"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M26.8158 63.4642C26.409 63.4646 26.0114 63.3428 25.6746 63.1147C25.3378 62.8865 25.0772 62.5625 24.9267 62.1845L2.17671 5.30952C2.02896 4.94039 1.99279 4.53601 2.07268 4.14651C2.15258 3.75701 2.34504 3.39953 2.62619 3.11838C2.90734 2.83723 3.26483 2.64477 3.65432 2.56487C4.04382 2.48497 4.4482 2.52114 4.81734 2.6689L61.6923 25.4189C62.0703 25.5694 62.3943 25.83 62.6225 26.1668C62.8506 26.5036 62.9724 26.9011 62.972 27.308C62.97 27.709 62.8494 28.1004 62.6252 28.433C62.4011 28.7655 62.0836 29.0243 61.7126 29.1767L38.333 38.8251L28.6845 62.2048C28.5321 62.5758 28.2734 62.8933 27.9408 63.1174C27.6082 63.3415 27.2168 63.4622 26.8158 63.4642ZM7.70171 8.1939L26.8361 56.0298L34.9611 36.4892C35.1785 35.9887 35.5778 35.5894 36.0783 35.372L55.6189 27.247L7.70171 8.1939Z" />
    </svg>
  );
}
