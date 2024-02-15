import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ThemeContext } from "../../ThemeContext";
import {
  toggleUserDropdown,
  handleDropdownItemClick,
  toogleNotification,
} from "../userDropdown";
import profilePic from "../../assets/image-one.jpg";
import downArrow from "../../assets/Arrow - Down 2.svg";
import bellIcon from "../../assets/solar_bell-outline.svg";
import dateIcon from "../../assets/solar_calendar-linear.svg";
import CalendarComponent from "../Calender";

const Header = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const handleDateSelection = (date) => {
    setCurrentDate(date);
    setCalendarVisible(false);
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(currentDate);

  return (
    <header className={` ${DarkTheme && "dark"}`}>
      {/* User Profile Dropdown */}
      <div className="dropdown" id="Dropdown">
        <button className="dropbtn " onClick={toggleUserDropdown}>
          <img
            src={profilePic}
            alt="profile picture"
            className="profile-picture"
          />
          <div className="user-name">
            <h3 className="text-greeting">Hello !</h3>
            <span className="text-name">Akpotobore</span>
          </div>
          <img src={downArrow} alt="down arrow" className="arrow-icon" />
        </button>
        <div className="dropdown-item" id="Dropdown">
          <ul className="dropdown-content">
            <li className="user-content">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="user-content">
              <Link to="/settings">Settings</Link>
            </li>
            <li className="user-content">
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Date Info */}
      <div className="date-info">
        <img src={dateIcon} alt="" onClick={toggleCalendar} />
        <h3 className="text-date">{formattedDate}</h3>
        {isCalendarVisible && (
          <div className="calendar-dropdown">
            <CalendarComponent onSelectDate={handleDateSelection} />
          </div>
        )}
      </div>

      {/* Notification Bell */}
      <div className="notify-dropdown" id="Notify">
        <button
          className="notify-btn notification"
          onClick={toogleNotification}
        >
          <div className="notification-bell">
            <img src={bellIcon} alt="bell" className="bell" />
          </div>
          <h3 className="text-user">Notification</h3>
          <div className="notification-alert">8</div>
        </button>
        <div className="notification-item" id="Notify">
          <div className="notification-content">
            <p className="user-notification">
              Hello! Akpotobore, welcome onboard{" "}
            </p>
            <p className="user-notification">
              Congratulations! you just finished a task
            </p>
            <p className="user-notification">
              Congratulations! you just moved up the leader board.
            </p>
            <p className="user-notification">
              Hello! you just unlocked a new level
            </p>
            <p className="user-notification">Hey! it's time to get active </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
