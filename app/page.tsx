import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainImageContainer}>
        <Image
          src="/dcv-lab/main-image.webp"
          alt="메인 이미지"
          fill
          style={{
            objectFit: 'cover',
          }}
        />

        <div className={styles.imageDimmer}>
          <div className={styles.card}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <svg
                width="160"
                height="160"
                viewBox="0 0 209 209"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M104.5 0C88.5451 0 75.6111 12.934 75.6111 28.8889V34.6667L71.4493 30.5049C60.1675 19.2231 41.8761 19.2231 30.5943 30.5049C19.3125 41.7867 19.3125 60.0781 30.5943 71.3599L34.3454 75.1111H29.3889C13.434 75.1111 0.5 88.0451 0.5 104C0.5 119.955 13.434 132.889 29.3889 132.889H34.0111L29.8493 137.051C18.5675 148.332 18.5675 166.624 29.8493 177.906C41.1311 189.188 59.4226 189.188 70.7044 177.906L75.6111 172.999V179.111C75.6111 195.066 88.5451 208 104.5 208C120.455 208 133.389 195.066 133.389 179.111V174.155L136.817 177.583C148.099 188.865 166.391 188.865 177.672 177.583C188.954 166.301 188.954 148.01 177.672 136.728L173.833 132.889H179.611C195.566 132.889 208.5 119.955 208.5 104C208.5 88.0451 195.566 75.1111 179.611 75.1111H173.499L176.928 71.6826C188.209 60.4008 188.209 42.1093 176.928 30.8275C165.646 19.5457 147.354 19.5457 136.072 30.8275L133.389 33.5111V28.8889C133.389 12.934 120.455 0 104.5 0Z"></path>
                <path
                  d="M75.2576 35.0202L76.1111 35.8738V34.6667V28.8889C76.1111 13.2101 88.8213 0.5 104.5 0.5C120.179 0.5 132.889 13.2101 132.889 28.8889V33.5111V34.7182L133.742 33.8647L136.426 31.1811C147.513 20.0945 165.487 20.0945 176.574 31.1811C187.661 42.2676 187.661 60.2425 176.574 71.329L173.145 74.7576L172.292 75.6111H173.499H179.611C195.29 75.6111 208 88.3213 208 104C208 119.679 195.29 132.389 179.611 132.389H173.833H172.626L173.48 133.242L177.319 137.082C188.405 148.168 188.405 166.143 177.319 177.23C166.232 188.316 148.258 188.316 137.171 177.23L133.742 173.801L132.889 172.947V174.155V179.111C132.889 194.79 120.179 207.5 104.5 207.5C88.8213 207.5 76.1111 194.79 76.1111 179.111V172.999V171.792L75.2576 172.645L70.3508 177.552C59.2643 188.639 41.2894 188.639 30.2029 177.552C19.1163 166.466 19.1163 148.491 30.2029 137.404L34.3647 133.242L35.2182 132.389H34.0111H29.3889C13.7101 132.389 1 119.679 1 104C1 88.3212 13.7101 75.6111 29.3889 75.6111H34.3454H35.5525L34.699 74.7576L30.9478 71.0064C19.8613 59.9198 19.8613 41.945 30.9478 30.8584C42.0344 19.7719 60.0092 19.7719 71.0958 30.8584L75.2576 35.0202Z"
                  stroke="black"
                  stroke-opacity="0.04"
                ></path>
                <defs>
                  <linearGradient
                    id="employee-card-linear-gradient"
                    x1="44"
                    y1="23"
                    x2="147.5"
                    y2="208"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stop-color="#C1263D"></stop>
                    <stop offset="25%" stop-color="#C1263D"></stop>
                    <stop offset="50%" stop-color="#9926C1"></stop>
                    <stop offset="75%" stop-color="#9926C1"></stop>
                  </linearGradient>
                </defs>
              </svg>

              <span
                style={{
                  fontSize: 22,
                  lineHeight: '28px',
                  letterSpacing: '-0.1px',
                  fontWeight: 600,
                  color: 'white',
                  marginTop: 32,
                }}
              >
                윤서
              </span>

              <span
                style={{
                  fontSize: 13,
                  lineHeight: '18px',
                  letterSpacing: '-0.4px',
                  fontWeight: 400,
                  marginTop: 8,
                  color: 'white',
                }}
              >
                email1234@gmail.com
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '24px',
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7887 28C8.55374 28 5.53817 27.0591 3 25.4356C5.15499 25.5751 8.95807 25.2411 11.3236 22.9848C7.76508 22.8215 6.16026 20.0923 5.95094 18.926C6.25329 19.0426 7.6953 19.1826 8.50934 18.856C4.4159 17.8296 3.78793 14.2373 3.92748 13.141C4.695 13.6775 5.99745 13.8641 6.50913 13.8174C2.69479 11.0882 4.06703 6.98276 4.74151 6.09635C7.47882 9.88867 11.5812 12.0186 16.6564 12.137C16.5607 11.7174 16.5102 11.2804 16.5102 10.8316C16.5102 7.61092 19.1134 5 22.3247 5C24.0025 5 25.5144 5.71275 26.5757 6.85284C27.6969 6.59011 29.3843 5.97507 30.2092 5.4432C29.7934 6.93611 28.4989 8.18149 27.7159 8.64308C27.7224 8.65878 27.7095 8.62731 27.7159 8.64308C28.4037 8.53904 30.2648 8.18137 31 7.68256C30.6364 8.52125 29.264 9.91573 28.1377 10.6964C28.3473 19.9381 21.2765 28 11.7887 28Z"
                  fill="#47ACDF"
                />
              </svg>

              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint0_radial_332_17)"
                />
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint1_radial_332_17)"
                />
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint2_radial_332_17)"
                />
                <path
                  d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                  fill="white"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_332_17"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                  >
                    <stop stop-color="#B13589" />
                    <stop offset="0.79309" stop-color="#C62F94" />
                    <stop offset="1" stop-color="#8A3AC8" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_332_17"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                  >
                    <stop stop-color="#E0E8B7" />
                    <stop offset="0.444662" stop-color="#FB8A2E" />
                    <stop offset="0.71474" stop-color="#E2425C" />
                    <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_332_17"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                  >
                    <stop offset="0.156701" stop-color="#406ADC" />
                    <stop offset="0.467799" stop-color="#6A45BE" />
                    <stop offset="1" stop-color="#6A45BE" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="14" fill="white" />
                <path
                  d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 21.6801 5.38269 26.5702 10.2435 28.7655C10.25 28.6141 10.2573 28.4752 10.2636 28.3561C10.2722 28.1938 10.2788 28.0682 10.2788 27.9976C10.2788 27.5769 10.5649 25.4904 10.5649 25.4904L12.3149 18.3053C12.0457 17.8678 11.8438 16.9423 11.8438 16.2356C11.8438 12.9711 13.6611 12.2644 14.7716 12.2644C16.1851 12.2644 16.5048 13.7957 16.5048 14.9231C16.5048 15.5194 16.1955 16.4528 15.8772 17.4134C15.5398 18.4314 15.1923 19.4799 15.1923 20.1899C15.1923 21.5697 16.5553 22.2596 17.4976 22.2596C19.988 22.2596 22.2764 19.1298 22.2764 16C22.2764 12.8702 20.8125 9.08412 16.0168 9.08412C11.2212 9.08412 9.06731 12.7356 9.06731 15.5288C9.06731 17.4134 9.77404 18.7933 10.1274 19.0288C10.2284 19.1186 10.4 19.3957 10.2788 19.786C10.1577 20.1764 9.9367 21.0481 9.84135 21.4351C9.83013 21.5248 9.72356 21.6774 9.38702 21.5697C8.96635 21.4351 6.29087 19.7524 6.29087 15.5288C6.29087 11.3053 9.60577 6.39182 16.0168 6.39182C22.4279 6.39182 25.7091 10.6995 25.7091 16C25.7091 21.3005 21.4183 24.6827 18.1538 24.6827C15.5423 24.6827 14.5192 23.516 14.3341 22.9327L13.3413 26.7187C13.1069 27.3468 12.6696 28.4757 12.1304 29.4583C13.3594 29.8111 14.6576 30 16 30Z"
                  fill="#BB0F23"
                />
              </svg>
            </div>
          </div>

          <span className={styles.nameTitle}>윤서 작가님</span>

          <span className={styles.description}>
            작가님의 대한 자기 설명 텍스트
          </span>
        </div>
      </div>

      <section className={styles.productSection}>
        <div className={styles.content}>
          <span className={styles.subTitle}>작가의 상품</span>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.content}>
          <span className={styles.subTitle}>아트 갤러리</span>

          <div className={styles.row}>
            <Image
              src="/dcv-lab/gallery_1.webp"
              alt="갤러리 1"
              width={700}
              height={860}
              style={{
                objectFit: 'cover',
                borderRadius: 20,
              }}
            />

            <Image
              src="/dcv-lab/gallery_2.webp"
              alt="갤러리 2"
              width={540}
              height={860}
              style={{
                objectFit: 'cover',
                borderRadius: 20,
              }}
            />
          </div>

          <div className={styles.row}>
            <Image
              src="/dcv-lab/gallery_3.webp"
              alt="갤러리 3"
              width={340}
              height={520}
              style={{
                objectFit: 'cover',
                borderRadius: 12,
              }}
            />

            <Image
              src="/dcv-lab/gallery_4.webp"
              alt="갤러리 4"
              width={340}
              height={520}
              style={{
                objectFit: 'cover',
                borderRadius: 12,
              }}
            />

            <Image
              src="/dcv-lab/gallery_5.webp"
              alt="갤러리 5"
              width={540}
              height={520}
              style={{
                objectFit: 'cover',
                borderRadius: 12,
              }}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.column}>
              <Image
                src="/dcv-lab/gallery_6.webp"
                alt="갤러리 6"
                width={540}
                height={400}
                style={{
                  objectFit: 'cover',
                  borderRadius: 12,
                }}
              />

              <Image
                src="/dcv-lab/gallery_7.webp"
                alt="갤러리 7"
                width={540}
                height={400}
                style={{
                  objectFit: 'cover',
                  borderRadius: 12,
                }}
              />
            </div>

            <Image
              src="/dcv-lab/gallery_8.webp"
              alt="갤러리 8"
              width={700}
              height={860}
              style={{
                objectFit: 'cover',
                borderRadius: 20,
              }}
            />
          </div>

          <div className={styles.row}>
            <Image
              src="/dcv-lab/gallery_9.webp"
              alt="갤러리 9"
              width={1280}
              height={1072}
              style={{
                objectFit: 'cover',
                borderRadius: 20,
              }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
