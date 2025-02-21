import React from "react";
import { Search, Share2, HelpCircle, MessageCircle, Gift } from "lucide-react";
import styles from "./Header.module.css";
import mainContentStyles from "./MainContent.module.css";
import tableStyles from "./Table.module.css";
import prizesStyles from "./Prizes.module.css";
import walletStyles from "./Wallet.module.css";

function Refer() {
  const tableData = [
    { id: "Event ID", name: "Event Name", date: "18-01-25", earning: "₹0" },
    { id: "Event ID", name: "Event Name", date: "18-01-25", earning: "₹0" },
  ];

  const prizes = [
    {
      name: "AirPods Pro",
      image:
        "https://www.imagineonline.store/cdn/shop/files/AirPods_Pro_2_PDP_Image_Position_1__en-IN.jpg?v=1727267585",
      description: "Win Apple AirPods Pro",
    },
    {
      name: "Smart Watch",
      image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
      description: "Win Latest Smartwatch",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      {/* <header className={styles.header}>
        <div className={styles.logoContainer}>
          <button className={styles.menuButton}>☰</button>
          <img
            src="src/images/logo1.jpg"
            alt="UptoSkills Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.actions}>
          <button className={styles.supportButton}>
            <HelpCircle className={styles.icon} />
            Support
          </button>
          <button className={styles.notificationButton}>🔔</button>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
      </header> */}

      {/* Sidebar */}
      {/* <div className={sidebarStyles.sidebar}>
        <div className={sidebarStyles.iconContainer}>
          <Gift className={sidebarStyles.icon} />
        </div>
        <span className={sidebarStyles.text}>Refer & Earn</span>
      </div> */}

      {/* Main Content */}
      <div className={mainContentStyles.mainContent}>
        <div className={mainContentStyles.contentContainer}>
          <div className={mainContentStyles.topSection}>
            <div>
              <div className={mainContentStyles.greeting}>
                <h1 className={mainContentStyles.title}>Hi, Janavi</h1>
                <p className={mainContentStyles.referButton}>Start Referring</p>
              </div>
              <p className={mainContentStyles.description}>
                You and your friend will get exciting gift vouchers & heavy
                discount on autotrender subscription.
              </p>

              <div className={mainContentStyles.referralSection}>
                <span className={mainContentStyles.referralLabel}>
                  Generate Referral Link
                </span>
                <div className={mainContentStyles.referralActions}>
                  <div className={mainContentStyles.referralLink}>
                    <span className={mainContentStyles.linkText}>
                      http://youtu.com/sharing/fg
                    </span>
                    <p className={mainContentStyles.copyButton}>copy</p>
                  </div>
                  <button className={mainContentStyles.referNowButton}>
                    Refer Now
                  </button>
                  <button className={mainContentStyles.shareButton}>
                    <Share2 className={mainContentStyles.shareIcon} />
                    Share
                  </button>
                </div>
              </div>

              <div className={mainContentStyles.socialButtons}>
                <button className={mainContentStyles.socialButton}>
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/018/930/476/small_2x/facebook-logo-facebook-icon-transparent-free-png.png"
                    className={mainContentStyles.socialIcon}
                  />
                </button>
                <button className={mainContentStyles.socialButton}>
                  <img
                    src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584853.png"
                    alt=""
                    className={mainContentStyles.socialIcon}
                  />
                </button>
                <button className={mainContentStyles.socialButton}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                    alt=""
                    className={mainContentStyles.socialIcon}
                  />
                </button>
                <button className={mainContentStyles.socialButton}>
                  <img
                    src="https://w7.pngwing.com/pngs/529/867/png-transparent-computer-icons-logo-twitter-miscellaneous-blue-logo-thumbnail.png"
                    alt=""
                    className={mainContentStyles.socialIcon}
                  />
                </button>
                <button className={mainContentStyles.socialButton}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/024/398/617/non_2x/whatsapp-logo-icon-isolated-on-transparent-background-free-png.png"
                    alt=""
                    className={mainContentStyles.socialIcon}
                  />
                </button>
              </div>
            </div>

            <div className={mainContentStyles.rightSection}>
              <div className={prizesStyles.prizesContainer}>
                {prizes.map((prize, index) => (
                  <div key={index} className={prizesStyles.prize}>
                    <div className={prizesStyles.prizeImageContainer}>
                      <img
                        src={prize.image}
                        alt={prize.name}
                        className={prizesStyles.prizeImage}
                      />
                    </div>
                    <span className={prizesStyles.prizeDescription}>
                      {prize.description}
                    </span>
                  </div>
                ))}
              </div>
              <div className={walletStyles.wallet}>
                <h3 className={walletStyles.walletTitle}>My Wallet</h3>
                <div className={walletStyles.walletContent}>
                  <div className={walletStyles.balance}>
                    <div className={walletStyles.balanceIcon}>₹</div>
                    <div>
                      <p className={walletStyles.balanceLabel}>
                        Available Balance
                      </p>
                      <p className={walletStyles.balanceAmount}>₹0.00</p>
                    </div>
                  </div>
                  <div className={walletStyles.earnings}>
                    <div className={walletStyles.earningsIcon}>₹</div>
                    <div>
                      <p className={walletStyles.earningsLabel}>
                        Total Earnings
                      </p>
                      <p className={walletStyles.earningsAmount}>₹0.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={mainContentStyles.tabsSection}>
            <div className={mainContentStyles.tabs}>
              {["Competitions", "Courses", "Jobs", "Internships"].map((tab) => (
                <p
                  key={tab}
                  className={`${mainContentStyles.tab} ${
                    tab === "Competitions" ? mainContentStyles.activeTab : ""
                  }`}
                >
                  {tab}
                </p>
              ))}
            </div>
            <div className={mainContentStyles.searchContainer}>
              <Search className={mainContentStyles.searchIcon} />
              <input
                type="text"
                placeholder="Search Stock, NFTs..."
                className={mainContentStyles.searchInput}
              />
            </div>
          </div>

          <div className={tableStyles.tableContainer}>
            <table className={tableStyles.table}>
              <thead>
                <tr className={tableStyles.tableHeader}>
                  <th className={tableStyles.tableHeaderCell}>Event ID</th>
                  <th className={tableStyles.tableHeaderCell}>Event Name</th>
                  <th className={tableStyles.tableHeaderCell}>Date & Time</th>
                  <th className={tableStyles.tableHeaderCell}>Total Earning</th>
                  <th className={tableStyles.tableHeaderCell}>
                    Withdraw Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className={tableStyles.tableRow}>
                    <td className={tableStyles.tableCell}>{row.id}</td>
                    <td className={tableStyles.tableCell}>{row.name}</td>
                    <td className={tableStyles.tableCell}>{row.date}</td>
                    <td className={tableStyles.tableCell}>{row.earning}</td>
                    <td className={tableStyles.tableCell}>
                      <button className={tableStyles.withdrawButton}>
                        Withdraw
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Refer;
