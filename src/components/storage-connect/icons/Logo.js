export default function Logo({ type = "header" }) {
  let textColor = type === "footer" ? "#021850" : "white";
  let iconColor = type === "footer" ? "#1849C6" : "#FFCE31";
  return (
    <svg
      width="199"
      height="28"
      viewBox="0 0 199 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.3395 10.4531C46.2732 9.83286 45.9938 9.34991 45.5014 9.00426C45.0137 8.65862 44.3793 8.4858 43.598 8.4858C43.0488 8.4858 42.5777 8.56866 42.1847 8.73438C41.7917 8.90009 41.491 9.125 41.2827 9.40909C41.0743 9.69318 40.9678 10.0175 40.9631 10.3821C40.9631 10.6851 41.0317 10.9479 41.169 11.1705C41.3111 11.393 41.5028 11.5824 41.7443 11.7386C41.9858 11.8902 42.2533 12.018 42.5469 12.1222C42.8404 12.2263 43.1364 12.3139 43.4347 12.3849L44.7983 12.7259C45.3475 12.8537 45.8755 13.0265 46.3821 13.2443C46.8935 13.4621 47.3504 13.7367 47.7528 14.0682C48.16 14.3996 48.482 14.7997 48.7188 15.2685C48.9555 15.7372 49.0739 16.2865 49.0739 16.9162C49.0739 17.7685 48.8561 18.5189 48.4205 19.1676C47.9848 19.8116 47.3551 20.3158 46.5312 20.6804C45.7121 21.0402 44.7202 21.2202 43.5554 21.2202C42.4238 21.2202 41.4413 21.045 40.608 20.6946C39.7794 20.3442 39.1307 19.8329 38.6619 19.1605C38.1979 18.4882 37.947 17.669 37.9091 16.7031H40.5014C40.5393 17.2098 40.6955 17.6312 40.9702 17.9673C41.2448 18.3035 41.6023 18.5545 42.0426 18.7202C42.4877 18.8859 42.9848 18.9688 43.5341 18.9688C44.107 18.9688 44.6089 18.8835 45.0398 18.7131C45.4754 18.5379 45.8163 18.2964 46.0625 17.9886C46.3087 17.6761 46.4342 17.3116 46.4389 16.8949C46.4342 16.5161 46.3229 16.2036 46.1051 15.9574C45.8873 15.7064 45.5819 15.4981 45.1889 15.3324C44.8007 15.1619 44.3461 15.0104 43.8253 14.8778L42.1705 14.4517C40.9725 14.1439 40.0256 13.6776 39.3295 13.0526C38.6383 12.4228 38.2926 11.5871 38.2926 10.5455C38.2926 9.68845 38.5246 8.93797 38.9886 8.29403C39.4574 7.65009 40.0942 7.15057 40.8991 6.79545C41.7041 6.43561 42.6155 6.25568 43.6335 6.25568C44.6657 6.25568 45.5701 6.43561 46.3466 6.79545C47.1278 7.15057 47.741 7.64536 48.1861 8.27983C48.6312 8.90956 48.8608 9.634 48.875 10.4531H46.3395ZM56.9567 10.0909V12.0795H50.6854V10.0909H56.9567ZM52.2337 7.47727H54.8048V17.7188C54.8048 18.0644 54.8568 18.3295 54.961 18.5142C55.0699 18.6941 55.212 18.8172 55.3871 18.8835C55.5623 18.9498 55.7565 18.983 55.9695 18.983C56.1305 18.983 56.2773 18.9711 56.4099 18.9474C56.5472 18.9238 56.6513 18.9025 56.7224 18.8835L57.1556 20.8935C57.0183 20.9408 56.8218 20.9929 56.5661 21.0497C56.3152 21.1065 56.0074 21.1397 55.6428 21.1491C54.9989 21.1681 54.4189 21.071 53.9028 20.858C53.3867 20.6402 52.9771 20.304 52.6741 19.8494C52.3758 19.3949 52.229 18.8267 52.2337 18.1449V7.47727ZM63.9483 21.2131C62.883 21.2131 61.9597 20.9787 61.1784 20.5099C60.3972 20.0412 59.7911 19.3854 59.3602 18.5426C58.9341 17.6998 58.721 16.715 58.721 15.5881C58.721 14.4612 58.9341 13.474 59.3602 12.6264C59.7911 11.7789 60.3972 11.1207 61.1784 10.652C61.9597 10.1832 62.883 9.94886 63.9483 9.94886C65.0136 9.94886 65.9369 10.1832 66.7182 10.652C67.4994 11.1207 68.1031 11.7789 68.5293 12.6264C68.9601 13.474 69.1756 14.4612 69.1756 15.5881C69.1756 16.715 68.9601 17.6998 68.5293 18.5426C68.1031 19.3854 67.4994 20.0412 66.7182 20.5099C65.9369 20.9787 65.0136 21.2131 63.9483 21.2131ZM63.9625 19.1534C64.5402 19.1534 65.0231 18.9948 65.4114 18.6776C65.7996 18.3556 66.0884 17.9247 66.2778 17.3849C66.472 16.8452 66.569 16.2438 66.569 15.581C66.569 14.9134 66.472 14.3097 66.2778 13.7699C66.0884 13.2254 65.7996 12.7921 65.4114 12.4702C65.0231 12.1482 64.5402 11.9872 63.9625 11.9872C63.3706 11.9872 62.8782 12.1482 62.4852 12.4702C62.097 12.7921 61.8058 13.2254 61.6116 13.7699C61.4223 14.3097 61.3276 14.9134 61.3276 15.581C61.3276 16.2438 61.4223 16.8452 61.6116 17.3849C61.8058 17.9247 62.097 18.3556 62.4852 18.6776C62.8782 18.9948 63.3706 19.1534 63.9625 19.1534ZM71.5577 21V10.0909H74.0506V11.9091H74.1643C74.3631 11.2794 74.704 10.794 75.187 10.4531C75.6747 10.1075 76.231 9.93466 76.856 9.93466C76.9981 9.93466 77.1567 9.94176 77.3319 9.95597C77.5118 9.96544 77.661 9.98201 77.7793 10.0057V12.3707C77.6704 12.3329 77.4976 12.2997 77.2609 12.2713C77.0289 12.2382 76.804 12.2216 76.5861 12.2216C76.1174 12.2216 75.696 12.3234 75.3219 12.527C74.9526 12.7259 74.6614 13.0028 74.4484 13.358C74.2353 13.7131 74.1288 14.1226 74.1288 14.5866V21H71.5577ZM82.6313 21.2202C81.94 21.2202 81.3174 21.0971 80.7634 20.8509C80.2142 20.5999 79.7786 20.2306 79.4566 19.7429C79.1394 19.2552 78.9808 18.6539 78.9808 17.9389C78.9808 17.3234 79.0944 16.8144 79.3217 16.4119C79.5489 16.0095 79.8591 15.6875 80.2521 15.446C80.6451 15.2045 81.0878 15.0223 81.5802 14.8991C82.0773 14.7713 82.5911 14.679 83.1214 14.6222C83.7606 14.5559 84.279 14.4967 84.6768 14.4446C85.0745 14.3878 85.3633 14.3026 85.5433 14.1889C85.7279 14.0705 85.8202 13.8883 85.8202 13.642V13.5994C85.8202 13.0644 85.6616 12.6501 85.3444 12.3565C85.0272 12.063 84.5702 11.9162 83.9736 11.9162C83.3439 11.9162 82.8444 12.0535 82.4751 12.3281C82.1105 12.6027 81.8643 12.9271 81.7364 13.3011L79.3359 12.9602C79.5253 12.2973 79.8378 11.7434 80.2734 11.2983C80.709 10.8485 81.2416 10.5123 81.8714 10.2898C82.5011 10.0625 83.1971 9.94886 83.9594 9.94886C84.485 9.94886 85.0082 10.0104 85.529 10.1335C86.0499 10.2566 86.5257 10.4602 86.9566 10.7443C87.3875 11.0237 87.7331 11.4048 87.9935 11.8878C88.2587 12.3707 88.3913 12.9744 88.3913 13.6989V21H85.9197V19.5014H85.8344C85.6782 19.8045 85.458 20.0885 85.1739 20.3537C84.8946 20.6141 84.5418 20.8248 84.1157 20.9858C83.6943 21.142 83.1995 21.2202 82.6313 21.2202ZM83.2989 19.331C83.815 19.331 84.2625 19.2292 84.6413 19.0256C85.0201 18.8172 85.3112 18.5426 85.5148 18.2017C85.7232 17.8608 85.8273 17.4891 85.8273 17.0866V15.8011C85.7469 15.8674 85.6095 15.929 85.4154 15.9858C85.226 16.0426 85.0129 16.0923 84.7762 16.1349C84.5395 16.1776 84.3051 16.2154 84.0731 16.2486C83.8411 16.2817 83.6398 16.3101 83.4694 16.3338C83.0859 16.3859 82.7426 16.4711 82.4396 16.5895C82.1365 16.7079 81.8974 16.8736 81.7222 17.0866C81.547 17.295 81.4594 17.5649 81.4594 17.8963C81.4594 18.3698 81.6323 18.7273 81.9779 18.9688C82.3236 19.2102 82.7639 19.331 83.2989 19.331ZM95.9208 25.3182C94.9975 25.3182 94.2044 25.1927 93.5415 24.9418C92.8787 24.6955 92.346 24.3641 91.9435 23.9474C91.5411 23.5308 91.2617 23.0691 91.1055 22.5625L93.4208 22.0014C93.525 22.2145 93.6765 22.4252 93.8754 22.6335C94.0742 22.8466 94.3417 23.0218 94.6779 23.1591C95.0188 23.3011 95.4473 23.3722 95.9634 23.3722C96.6926 23.3722 97.2963 23.1946 97.7745 22.8395C98.2527 22.4891 98.4918 21.9115 98.4918 21.1065V19.0398H98.364C98.2314 19.3049 98.0373 19.5772 97.7816 19.8565C97.5307 20.1359 97.1969 20.3703 96.7802 20.5597C96.3683 20.7491 95.8498 20.8438 95.2248 20.8438C94.3867 20.8438 93.6268 20.6473 92.945 20.2543C92.2679 19.8565 91.7281 19.2647 91.3256 18.4787C90.9279 17.688 90.729 16.6984 90.729 15.5099C90.729 14.312 90.9279 13.3011 91.3256 12.4773C91.7281 11.6487 92.2702 11.0213 92.9521 10.5952C93.6339 10.1643 94.3938 9.94886 95.2319 9.94886C95.8711 9.94886 96.3967 10.0578 96.8086 10.2756C97.2253 10.4886 97.5567 10.7467 97.8029 11.0497C98.0491 11.348 98.2362 11.6297 98.364 11.8949H98.506V10.0909H101.042V21.1776C101.042 22.1103 100.819 22.8821 100.374 23.4929C99.9289 24.1037 99.3204 24.5606 98.5487 24.8636C97.7769 25.1667 96.9009 25.3182 95.9208 25.3182ZM95.9421 18.8267C96.4866 18.8267 96.9506 18.6941 97.3342 18.429C97.7177 18.1638 98.0089 17.7827 98.2077 17.2855C98.4066 16.7884 98.506 16.1918 98.506 15.4957C98.506 14.8092 98.4066 14.2079 98.2077 13.6918C98.0136 13.1757 97.7248 12.7756 97.3413 12.4915C96.9625 12.2027 96.4961 12.0582 95.9421 12.0582C95.3692 12.0582 94.891 12.2074 94.5075 12.5057C94.1239 12.804 93.8351 13.2135 93.641 13.7344C93.4469 14.2505 93.3498 14.8376 93.3498 15.4957C93.3498 16.1634 93.4469 16.7481 93.641 17.25C93.8398 17.7472 94.131 18.1354 94.5146 18.4148C94.9028 18.6894 95.3787 18.8267 95.9421 18.8267ZM108.706 21.2131C107.612 21.2131 106.668 20.9858 105.872 20.5312C105.082 20.072 104.473 19.4233 104.047 18.5852C103.621 17.7424 103.408 16.7505 103.408 15.6094C103.408 14.4872 103.621 13.5024 104.047 12.6548C104.478 11.8026 105.079 11.1397 105.851 10.6662C106.623 10.188 107.529 9.94886 108.571 9.94886C109.243 9.94886 109.878 10.0578 110.475 10.2756C111.076 10.4886 111.606 10.8201 112.065 11.2699C112.529 11.7197 112.894 12.2926 113.159 12.9886C113.424 13.6799 113.557 14.5038 113.557 15.4602V16.2486H104.615V14.5156H111.092C111.088 14.0232 110.981 13.5852 110.773 13.2017C110.564 12.8134 110.273 12.508 109.899 12.2855C109.53 12.063 109.099 11.9517 108.607 11.9517C108.081 11.9517 107.619 12.0795 107.222 12.3352C106.824 12.5862 106.514 12.9176 106.291 13.3295C106.073 13.7367 105.962 14.1842 105.957 14.6719V16.1847C105.957 16.8191 106.073 17.3636 106.305 17.8182C106.537 18.268 106.862 18.6136 107.278 18.8551C107.695 19.0919 108.183 19.2102 108.742 19.2102C109.116 19.2102 109.454 19.1581 109.757 19.054C110.06 18.9451 110.323 18.7865 110.546 18.5781C110.768 18.3698 110.936 18.1117 111.05 17.804L113.45 18.0739C113.299 18.7083 113.01 19.2623 112.584 19.7358C112.162 20.2045 111.623 20.5691 110.965 20.8295C110.306 21.0852 109.554 21.2131 108.706 21.2131ZM128.496 11.3622H125.84C125.764 10.9266 125.624 10.5407 125.421 10.2045C125.217 9.86364 124.964 9.57481 124.661 9.33807C124.358 9.10133 124.012 8.92377 123.624 8.8054C123.24 8.68229 122.826 8.62074 122.381 8.62074C121.59 8.62074 120.889 8.8196 120.279 9.21733C119.668 9.61032 119.19 10.188 118.844 10.9503C118.498 11.7079 118.325 12.6335 118.325 13.7273C118.325 14.84 118.498 15.7775 118.844 16.5398C119.194 17.2973 119.672 17.8703 120.279 18.2585C120.889 18.642 121.588 18.8338 122.374 18.8338C122.809 18.8338 123.217 18.777 123.595 18.6634C123.979 18.545 124.322 18.3722 124.625 18.1449C124.933 17.9176 125.191 17.6383 125.399 17.3068C125.612 16.9754 125.759 16.5966 125.84 16.1705L128.496 16.1847C128.396 16.8759 128.181 17.5246 127.85 18.1307C127.523 18.7367 127.094 19.2718 126.564 19.7358C126.034 20.1951 125.413 20.5549 124.703 20.8153C123.993 21.071 123.205 21.1989 122.338 21.1989C121.06 21.1989 119.919 20.9029 118.915 20.3111C117.911 19.7192 117.12 18.8646 116.543 17.7472C115.965 16.6297 115.676 15.2898 115.676 13.7273C115.676 12.16 115.967 10.8201 116.55 9.70739C117.132 8.58996 117.925 7.73532 118.929 7.14347C119.933 6.55161 121.069 6.25568 122.338 6.25568C123.148 6.25568 123.901 6.36932 124.597 6.59659C125.293 6.82386 125.913 7.15767 126.458 7.59801C127.002 8.03362 127.449 8.56866 127.8 9.20312C128.155 9.83286 128.387 10.5526 128.496 11.3622ZM135.754 21.2131C134.688 21.2131 133.765 20.9787 132.984 20.5099C132.203 20.0412 131.597 19.3854 131.166 18.5426C130.74 17.6998 130.526 16.715 130.526 15.5881C130.526 14.4612 130.74 13.474 131.166 12.6264C131.597 11.7789 132.203 11.1207 132.984 10.652C133.765 10.1832 134.688 9.94886 135.754 9.94886C136.819 9.94886 137.742 10.1832 138.524 10.652C139.305 11.1207 139.909 11.7789 140.335 12.6264C140.766 13.474 140.981 14.4612 140.981 15.5881C140.981 16.715 140.766 17.6998 140.335 18.5426C139.909 19.3854 139.305 20.0412 138.524 20.5099C137.742 20.9787 136.819 21.2131 135.754 21.2131ZM135.768 19.1534C136.346 19.1534 136.829 18.9948 137.217 18.6776C137.605 18.3556 137.894 17.9247 138.083 17.3849C138.277 16.8452 138.375 16.2438 138.375 15.581C138.375 14.9134 138.277 14.3097 138.083 13.7699C137.894 13.2254 137.605 12.7921 137.217 12.4702C136.829 12.1482 136.346 11.9872 135.768 11.9872C135.176 11.9872 134.684 12.1482 134.291 12.4702C133.902 12.7921 133.611 13.2254 133.417 13.7699C133.228 14.3097 133.133 14.9134 133.133 15.581C133.133 16.2438 133.228 16.8452 133.417 17.3849C133.611 17.9247 133.902 18.3556 134.291 18.6776C134.684 18.9948 135.176 19.1534 135.768 19.1534ZM145.934 14.608V21H143.363V10.0909H145.821V11.9446H145.948C146.199 11.3338 146.599 10.8485 147.149 10.4886C147.703 10.1288 148.387 9.94886 149.201 9.94886C149.954 9.94886 150.61 10.1098 151.169 10.4318C151.732 10.7538 152.168 11.2202 152.475 11.831C152.788 12.4418 152.942 13.1828 152.937 14.054V21H150.366V14.4517C150.366 13.7225 150.177 13.152 149.798 12.7401C149.424 12.3281 148.905 12.1222 148.242 12.1222C147.793 12.1222 147.393 12.2216 147.042 12.4205C146.697 12.6146 146.424 12.8963 146.225 13.2656C146.031 13.6349 145.934 14.0824 145.934 14.608ZM158.322 14.608V21H155.751V10.0909H158.208V11.9446H158.336C158.587 11.3338 158.987 10.8485 159.536 10.4886C160.09 10.1288 160.774 9.94886 161.589 9.94886C162.342 9.94886 162.997 10.1098 163.556 10.4318C164.12 10.7538 164.555 11.2202 164.863 11.831C165.175 12.4418 165.329 13.1828 165.325 14.054V21H162.754V14.4517C162.754 13.7225 162.564 13.152 162.185 12.7401C161.811 12.3281 161.293 12.1222 160.63 12.1222C160.18 12.1222 159.78 12.2216 159.43 12.4205C159.084 12.6146 158.812 12.8963 158.613 13.2656C158.419 13.6349 158.322 14.0824 158.322 14.608ZM172.968 21.2131C171.874 21.2131 170.929 20.9858 170.134 20.5312C169.343 20.072 168.735 19.4233 168.309 18.5852C167.883 17.7424 167.669 16.7505 167.669 15.6094C167.669 14.4872 167.883 13.5024 168.309 12.6548C168.74 11.8026 169.341 11.1397 170.113 10.6662C170.884 10.188 171.791 9.94886 172.833 9.94886C173.505 9.94886 174.14 10.0578 174.736 10.2756C175.338 10.4886 175.868 10.8201 176.327 11.2699C176.791 11.7197 177.156 12.2926 177.421 12.9886C177.686 13.6799 177.819 14.5038 177.819 15.4602V16.2486H168.877V14.5156H175.354C175.349 14.0232 175.243 13.5852 175.035 13.2017C174.826 12.8134 174.535 12.508 174.161 12.2855C173.792 12.063 173.361 11.9517 172.868 11.9517C172.343 11.9517 171.881 12.0795 171.483 12.3352C171.086 12.5862 170.776 12.9176 170.553 13.3295C170.335 13.7367 170.224 14.1842 170.219 14.6719V16.1847C170.219 16.8191 170.335 17.3636 170.567 17.8182C170.799 18.268 171.124 18.6136 171.54 18.8551C171.957 19.0919 172.445 19.2102 173.003 19.2102C173.377 19.2102 173.716 19.1581 174.019 19.054C174.322 18.9451 174.585 18.7865 174.807 18.5781C175.03 18.3698 175.198 18.1117 175.312 17.804L177.712 18.0739C177.561 18.7083 177.272 19.2623 176.846 19.7358C176.424 20.2045 175.884 20.5691 175.226 20.8295C174.568 21.0852 173.815 21.2131 172.968 21.2131ZM184.952 21.2131C183.863 21.2131 182.928 20.974 182.147 20.4957C181.37 20.0175 180.771 19.357 180.35 18.5142C179.933 17.6667 179.725 16.6913 179.725 15.5881C179.725 14.4801 179.938 13.5024 180.364 12.6548C180.79 11.8026 181.392 11.1397 182.168 10.6662C182.949 10.188 183.873 9.94886 184.938 9.94886C185.823 9.94886 186.607 10.1122 187.289 10.4389C187.975 10.7609 188.522 11.2178 188.929 11.8097C189.337 12.3968 189.569 13.0833 189.625 13.8693H187.168C187.069 13.3437 186.832 12.9058 186.458 12.5554C186.089 12.2003 185.594 12.0227 184.974 12.0227C184.448 12.0227 183.986 12.1648 183.589 12.4489C183.191 12.7282 182.881 13.1307 182.658 13.6562C182.44 14.1818 182.331 14.8116 182.331 15.5455C182.331 16.2888 182.44 16.928 182.658 17.4631C182.876 17.9934 183.181 18.4029 183.574 18.6918C183.972 18.9759 184.438 19.1179 184.974 19.1179C185.352 19.1179 185.691 19.0469 185.989 18.9048C186.292 18.758 186.545 18.5473 186.749 18.2727C186.953 17.9981 187.092 17.6643 187.168 17.2713H189.625C189.564 18.0431 189.337 18.7273 188.944 19.3239C188.551 19.9157 188.016 20.3797 187.339 20.7159C186.661 21.0473 185.866 21.2131 184.952 21.2131ZM197.384 10.0909V12.0795H191.113V10.0909H197.384ZM192.661 7.47727H195.232V17.7188C195.232 18.0644 195.284 18.3295 195.388 18.5142C195.497 18.6941 195.639 18.8172 195.814 18.8835C195.99 18.9498 196.184 18.983 196.397 18.983C196.558 18.983 196.705 18.9711 196.837 18.9474C196.975 18.9238 197.079 18.9025 197.15 18.8835L197.583 20.8935C197.446 20.9408 197.249 20.9929 196.993 21.0497C196.743 21.1065 196.435 21.1397 196.07 21.1491C195.426 21.1681 194.846 21.071 194.33 20.858C193.814 20.6402 193.404 20.304 193.101 19.8494C192.803 19.3949 192.656 18.8267 192.661 18.1449V7.47727Z"
        fill={textColor}
      />
      <path
        d="M0 1.71875C0 0.769511 0.769511 0 1.71875 0H28.2812C29.2305 0 30 0.769511 30 1.71875C30 2.66799 29.2305 3.4375 28.2812 3.4375H1.71875C0.769511 3.4375 0 2.66799 0 1.71875ZM5.04545 4.8125C3.3886 4.8125 2.04545 6.15565 2.04545 7.8125V24.5C2.04545 26.1569 3.3886 27.5 5.04545 27.5H24.9545C26.6114 27.5 27.9545 26.1569 27.9545 24.5V7.8125C27.9545 6.15565 26.6114 4.8125 24.9545 4.8125H5.04545ZM19.7727 9.96875C19.7727 10.5383 19.311 11 18.7415 11H10.5767C10.0072 11 9.54545 10.5383 9.54545 9.96875C9.54545 9.39921 10.0072 8.9375 10.5767 8.9375H18.7415C19.311 8.9375 19.7727 9.39921 19.7727 9.96875Z"
        fill={iconColor}
      />
    </svg>
  );
}
