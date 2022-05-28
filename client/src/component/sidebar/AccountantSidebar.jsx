import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
function SidebarAcc() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Link to="/chief-accountant">
            <img
              className="sapo-logo"
              src="https://sapo.dktcdn.net/fe-cdn-production/images/sapo-pos-w.png"
              alt="Sapo-logo"
            />
          </Link>
        </div>
        <div className="sidebar-logo_icon">
          <img
            src="https://sapo.dktcdn.net/fe-cdn-production/images/menu-toggle.svg"
            alt="Sapo"
          />
        </div>
      </div>
      <div className="sidebar-container">
        <ul className="sidebar-list">
          <li className="sidebar-list_item">
            <Link className="sidebar-list_link" to="/">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path d="M501.333 490.667H10.667C4.779 490.667 0 495.445 0 501.333 0 507.221 4.779 512 10.667 512h490.667c5.888 0 10.667-4.779 10.667-10.667-.001-5.888-4.78-10.666-10.668-10.666z"></path>
                <path d="M96 362.667H32c-5.888 0-10.667 4.779-10.667 10.667v128C21.333 507.221 26.112 512 32 512h64c5.888 0 10.667-4.779 10.667-10.667v-128c0-5.888-4.779-10.666-10.667-10.666zm-10.667 128H42.667V384h42.667v106.667zM224 256h-64c-5.888 0-10.667 4.779-10.667 10.667v234.667c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667V266.667c0-5.888-4.779-10.667-10.667-10.667zm-10.667 234.667h-42.667V277.333h42.667v213.334zM352 298.667h-64c-5.888 0-10.667 4.779-10.667 10.667v192c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667v-192c0-5.889-4.779-10.667-10.667-10.667zm-10.667 192h-42.667V320h42.667v170.667zM480 170.667h-64c-5.888 0-10.667 4.779-10.667 10.667v320c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667v-320c0-5.889-4.779-10.667-10.667-10.667zm-10.667 320h-42.667V192h42.667v298.667zM64 192c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C106.667 211.136 87.531 192 64 192zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333C85.333 246.421 75.776 256 64 256zM192 85.333c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667s42.667-19.136 42.667-42.667c0-23.531-19.136-42.667-42.667-42.667zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333c0 11.755-9.557 21.333-21.333 21.333zM320 128c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C362.667 147.136 343.531 128 320 128zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333c0 11.754-9.557 21.333-21.333 21.333zM448 0c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C490.667 19.136 471.531 0 448 0zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333C469.333 54.421 459.776 64 448 64z"></path>
                <path d="M432.939 57.728c-4.16-4.16-10.923-4.16-15.083 0l-82.773 82.773c-4.16 4.16-4.16 10.923 0 15.083a10.716 10.716 0 0 0 7.552 3.115c2.709 0 5.44-1.024 7.531-3.115l82.773-82.773c4.16-4.16 4.16-10.923 0-15.083zM294.208 146.048l-68.523-19.541c-5.739-1.664-11.563 1.664-13.163 7.339-1.621 5.675 1.664 11.563 7.317 13.184l68.523 19.541a10.675 10.675 0 0 0 13.184-7.339c1.622-5.653-1.663-11.563-7.338-13.184zM175.36 141.291c-3.669-4.608-10.368-5.355-14.976-1.707l-80.427 64.128c-4.608 3.691-5.376 10.389-1.685 14.997a10.658 10.658 0 0 0 8.341 4.011c2.325 0 4.672-.768 6.635-2.304l80.427-64.128c4.608-3.691 5.376-10.389 1.685-14.997z"></path>
              </svg>
              Tổng quan
            </Link>
          </li>
          <li className="sidebar-list_item">
            <Link
              className="sidebar-list_link"
              to="/chief-accountant/bill-category"
            >
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 483.2 483.2"
                aria-hidden="true"
              >
                <path d="M367.4 182.2H12c-6.6 0-12 5.4-12 12v202.6c0 6.6 5.4 12 12 12h355.4c6.6 0 12-5.4 12-12V194.2c0-6.6-5.4-12-12-12zm-12 202.6H24V206.2h331.4v178.6z"></path>
                <path d="M80.8 307.2h29.8c6.6 0 12-5.4 12-12s-5.4-12-12-12H80.8c-6.6 0-12 5.4-12 12s5.3 12 12 12zM419.2 128.1H63.8c-6.6 0-12 5.4-12 12s5.4 12 12 12h343.4v190.6c0 6.6 5.4 12 12 12s12-5.4 12-12V140.1c0-6.6-5.4-12-12-12z"></path>
                <path d="M471.2 74.4H115.8c-6.6 0-12 5.4-12 12s5.4 12 12 12h343.4V289c0 6.6 5.4 12 12 12s12-5.4 12-12V86.4c0-6.6-5.4-12-12-12zM268.8 307.2h29.8c6.6 0 12-5.4 12-12s-5.4-12-12-12h-29.8c-6.6 0-12 5.4-12 12s5.4 12 12 12zM180.3 307.4h18.8c4.7 0 8.6 3.8 8.6 8.6s-3.8 8.6-8.6 8.6h-33.7c-6.6 0-12 5.4-12 12s5.4 12 12 12h12.3v7.9c0 6.6 5.4 12 12 12s12-5.4 12-12v-8c16.7-1.3 30-15.4 30-32.5 0-18-14.6-32.6-32.6-32.6h-18.8c-4.7 0-8.6-3.8-8.6-8.6 0-4.7 3.8-8.6 8.6-8.6h33.1c6.6 0 12-5.4 12-12s-5.4-12-12-12h-11.7v-7.6c0-6.6-5.4-12-12-12s-12 5.4-12 12v7.8c-16.7 1.3-30 15.4-30 32.5 0 17.9 14.6 32.5 32.6 32.5z"></path>
              </svg>
              Phiếu thu
            </Link>
          </li>
          <li className="sidebar-list_item">
            <Link className="sidebar-list_link" to="/">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 482.9 482.9"
                aria-hidden="true"
              >
                <path d="M239.7 260.2h3.2c29.3-.5 53-10.8 70.5-30.5 38.5-43.4 32.1-117.8 31.4-124.9-2.5-53.3-27.7-78.8-48.5-90.7C280.8 5.2 262.7.4 242.5 0H240.8c-11.1 0-32.9 1.8-53.8 13.7-21 11.9-46.6 37.4-49.1 91.1-.7 7.1-7.1 81.5 31.4 124.9 17.4 19.7 41.1 30 70.4 30.5zm-75.1-152.9c0-.3.1-.6.1-.8 3.3-71.7 54.2-79.4 76-79.4H241.9c27 .6 72.9 11.6 76 79.4 0 .3 0 .6.1.8.1.7 7.1 68.7-24.7 104.5-12.6 14.2-29.4 21.2-51.5 21.4h-1c-22-.2-38.9-7.2-51.4-21.4-31.7-35.6-24.9-103.9-24.8-104.5z"></path>
                <path d="M446.8 383.6v-.3c0-.8-.1-1.6-.1-2.5-.6-19.8-1.9-66.1-45.3-80.9-.3-.1-.7-.2-1-.3-45.1-11.5-82.6-37.5-83-37.8-6.1-4.3-14.5-2.8-18.8 3.3-4.3 6.1-2.8 14.5 3.3 18.8 1.7 1.2 41.5 28.9 91.3 41.7 23.3 8.3 25.9 33.2 26.6 56 0 .9 0 1.7.1 2.5.1 9-.5 22.9-2.1 30.9-16.2 9.2-79.7 41-176.3 41-96.2 0-160.1-31.9-176.4-41.1-1.6-8-2.3-21.9-2.1-30.9 0-.8.1-1.6.1-2.5.7-22.8 3.3-47.7 26.6-56 49.8-12.8 89.6-40.6 91.3-41.7 6.1-4.3 7.6-12.7 3.3-18.8-4.3-6.1-12.7-7.6-18.8-3.3-.4.3-37.7 26.3-83 37.8-.4.1-.7.2-1 .3-43.4 14.9-44.7 61.2-45.3 80.9 0 .9 0 1.7-.1 2.5v.3c-.1 5.2-.2 31.9 5.1 45.3 1 2.6 2.8 4.8 5.2 6.3 3 2 74.9 47.8 195.2 47.8s192.2-45.9 195.2-47.8c2.3-1.5 4.2-3.7 5.2-6.3 5-13.3 4.9-40 4.8-45.2z"></path>
              </svg>
              Quản lý NV kế toán
            </Link>
          </li>
          <li className="sidebar-list_item">
            <Link className="sidebar-list_link" to="/">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path d="M192 176c-17.344 0-32-10.976-32-24s14.656-24 32-24c8.704 0 16.832 2.688 22.848 7.616 6.848 5.568 16.896 4.512 22.528-2.304 5.568-6.848 4.544-16.928-2.304-22.528-7.712-6.272-17.056-10.496-27.072-12.768V80c0-8.832-7.168-16-16-16s-16 7.168-16 16v17.984c-27.52 6.272-48 28-48 54.016 0 30.88 28.704 56 64 56 17.344 0 32 10.976 32 24s-14.656 24-32 24c-8.704 0-16.832-2.688-22.848-7.616-6.88-5.6-16.928-4.544-22.496 2.304-5.6 6.848-4.576 16.928 2.272 22.528 7.712 6.272 17.056 10.496 27.072 12.8V304c0 8.832 7.168 16 16 16s16-7.168 16-16v-17.984c27.52-6.272 48-28 48-54.016 0-30.88-28.704-56-64-56z"></path>
                <path d="M446.752 137.856a15.831 15.831 0 0 0-3.456-5.184L315.328 4.704a15.831 15.831 0 0 0-5.184-3.456C308.224.448 306.144 0 304 0H96C78.368 0 64 14.368 64 32v448c0 17.632 14.368 32 32 32h320c17.632 0 32-14.368 32-32V144c0-2.144-.448-4.224-1.248-6.144zM320 54.624L393.376 128H320V54.624zM416 496v-16H96V32h192v96c0 17.632 14.368 32 32 32h96v320h.032L416 496z"></path>
                <path d="M368 224h-64c-8.832 0-16 7.136-16 16s7.168 16 16 16h64c8.832 0 16-7.168 16-16s-7.168-16-16-16zM368 288h-64c-8.832 0-16 7.136-16 16s7.168 16 16 16h64c8.832 0 16-7.168 16-16s-7.168-16-16-16zM368 352H144c-8.832 0-16 7.136-16 16s7.168 16 16 16h224c8.832 0 16-7.168 16-16s-7.168-16-16-16zM368 416H144c-8.832 0-16 7.136-16 16s7.168 16 16 16h224c8.832 0 16-7.168 16-16s-7.168-16-16-16z"></path>
              </svg>
              Danh sách nộp tiền
            </Link>
          </li>
          <li className="sidebar-list_item">
            <Link className="sidebar-list_link" to="/">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path d="M501.333 490.667H10.667C4.779 490.667 0 495.445 0 501.333 0 507.221 4.779 512 10.667 512h490.667c5.888 0 10.667-4.779 10.667-10.667-.001-5.888-4.78-10.666-10.668-10.666z"></path>
                <path d="M96 362.667H32c-5.888 0-10.667 4.779-10.667 10.667v128C21.333 507.221 26.112 512 32 512h64c5.888 0 10.667-4.779 10.667-10.667v-128c0-5.888-4.779-10.666-10.667-10.666zm-10.667 128H42.667V384h42.667v106.667zM224 256h-64c-5.888 0-10.667 4.779-10.667 10.667v234.667c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667V266.667c0-5.888-4.779-10.667-10.667-10.667zm-10.667 234.667h-42.667V277.333h42.667v213.334zM352 298.667h-64c-5.888 0-10.667 4.779-10.667 10.667v192c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667v-192c0-5.889-4.779-10.667-10.667-10.667zm-10.667 192h-42.667V320h42.667v170.667zM480 170.667h-64c-5.888 0-10.667 4.779-10.667 10.667v320c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667v-320c0-5.889-4.779-10.667-10.667-10.667zm-10.667 320h-42.667V192h42.667v298.667zM64 192c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C106.667 211.136 87.531 192 64 192zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333C85.333 246.421 75.776 256 64 256zM192 85.333c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667s42.667-19.136 42.667-42.667c0-23.531-19.136-42.667-42.667-42.667zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333c0 11.755-9.557 21.333-21.333 21.333zM320 128c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C362.667 147.136 343.531 128 320 128zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333c0 11.754-9.557 21.333-21.333 21.333zM448 0c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C490.667 19.136 471.531 0 448 0zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333C469.333 54.421 459.776 64 448 64z"></path>
                <path d="M432.939 57.728c-4.16-4.16-10.923-4.16-15.083 0l-82.773 82.773c-4.16 4.16-4.16 10.923 0 15.083a10.716 10.716 0 0 0 7.552 3.115c2.709 0 5.44-1.024 7.531-3.115l82.773-82.773c4.16-4.16 4.16-10.923 0-15.083zM294.208 146.048l-68.523-19.541c-5.739-1.664-11.563 1.664-13.163 7.339-1.621 5.675 1.664 11.563 7.317 13.184l68.523 19.541a10.675 10.675 0 0 0 13.184-7.339c1.622-5.653-1.663-11.563-7.338-13.184zM175.36 141.291c-3.669-4.608-10.368-5.355-14.976-1.707l-80.427 64.128c-4.608 3.691-5.376 10.389-1.685 14.997a10.658 10.658 0 0 0 8.341 4.011c2.325 0 4.672-.768 6.635-2.304l80.427-64.128c4.608-3.691 5.376-10.389 1.685-14.997z"></path>
              </svg>
              Báo cáo
            </Link>
          </li>
          <li className="sidebar-list_item">
            <Link className="sidebar-list_link" to="/">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 478.703 478.703"
                aria-hidden="true"
              >
                <path d="M454.2 189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8 7.1-27.9-3.2-38.1l-29.8-29.8c-5.6-5.6-13-8.7-20.9-8.7-6.2 0-12.1 1.9-17.1 5.5l-27.8 19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2a29.54 29.54 0 0 0-29.2-24.7h-42.1c-14.5 0-26.8 10.4-29.2 24.7l-5.8 34c-11.2 3.5-22.1 8.1-32.5 13.7l-27.5-19.8c-5-3.6-11-5.5-17.2-5.5-7.9 0-15.4 3.1-20.9 8.7l-29.9 29.8c-10.2 10.2-11.6 26.3-3.2 38.1l20 28.1c-5.5 10.5-9.9 21.4-13.3 32.7l-33.2 5.6a29.54 29.54 0 0 0-24.7 29.2v42.1c0 14.5 10.4 26.8 24.7 29.2l34 5.8c3.5 11.2 8.1 22.1 13.7 32.5l-19.7 27.4c-8.4 11.8-7.1 27.9 3.2 38.1l29.8 29.8c5.6 5.6 13 8.7 20.9 8.7 6.2 0 12.1-1.9 17.1-5.5l28.1-20c10.1 5.3 20.7 9.6 31.6 13l5.6 33.6a29.54 29.54 0 0 0 29.2 24.7h42.2c14.5 0 26.8-10.4 29.2-24.7l5.7-33.6c11.3-3.5 22.2-8 32.6-13.5l27.7 19.8c5 3.6 11 5.5 17.2 5.5 7.9 0 15.3-3.1 20.9-8.7l29.8-29.8c10.2-10.2 11.6-26.3 3.2-38.1l-19.8-27.8c5.5-10.5 10.1-21.4 13.5-32.6l33.6-5.6a29.54 29.54 0 0 0 24.7-29.2v-42.1c.2-14.5-10.2-26.8-24.5-29.2zm-2.3 71.3c0 1.3-.9 2.4-2.2 2.6l-42 7c-5.3.9-9.5 4.8-10.8 9.9-3.8 14.7-9.6 28.8-17.4 41.9-2.7 4.6-2.5 10.3.6 14.7l24.7 34.8c.7 1 .6 2.5-.3 3.4l-29.8 29.8c-.7.7-1.4.8-1.9.8-.6 0-1.1-.2-1.5-.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-.6-13.1 7.8-27.2 13.6-41.9 17.4-5.2 1.3-9.1 5.6-9.9 10.8l-7.1 42c-.2 1.3-1.3 2.2-2.6 2.2h-42.1c-1.3 0-2.4-.9-2.6-2.2l-7-42c-.9-5.3-4.8-9.5-9.9-10.8-14.3-3.7-28.1-9.4-41-16.8-2.1-1.2-4.5-1.8-6.8-1.8-2.7 0-5.5.8-7.8 2.5l-35 24.9c-.5.3-1 .5-1.5.5-.4 0-1.2-.1-1.9-.8l-29.8-29.8c-.9-.9-1-2.3-.3-3.4l24.6-34.5c3.1-4.4 3.3-10.2.6-14.8-7.8-13-13.8-27.1-17.6-41.8-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2c-1.3-.2-2.2-1.3-2.2-2.6v-42.1c0-1.3.9-2.4 2.2-2.6l41.7-7c5.3-.9 9.6-4.8 10.9-10 3.7-14.7 9.4-28.9 17.1-42 2.7-4.6 2.4-10.3-.7-14.6l-24.9-35c-.7-1-.6-2.5.3-3.4l29.8-29.8c.7-.7 1.4-.8 1.9-.8.6 0 1.1.2 1.5.5l34.5 24.6c4.4 3.1 10.2 3.3 14.8.6 13-7.8 27.1-13.8 41.8-17.6 5.1-1.4 9-5.6 9.9-10.8l7.2-42.3c.2-1.3 1.3-2.2 2.6-2.2h42.1c1.3 0 2.4.9 2.6 2.2l7 41.7c.9 5.3 4.8 9.6 10 10.9 15.1 3.8 29.5 9.7 42.9 17.6 4.6 2.7 10.3 2.5 14.7-.6l34.5-24.8c.5-.3 1-.5 1.5-.5.4 0 1.2.1 1.9.8l29.8 29.8c.9.9 1 2.3.3 3.4l-24.7 34.7c-3.1 4.3-3.3 10.1-.6 14.7 7.8 13.1 13.6 27.2 17.4 41.9 1.3 5.2 5.6 9.1 10.8 9.9l42 7.1c1.3.2 2.2 1.3 2.2 2.6v42.1h-.1z"></path>
                <path d="M239.4 136.001c-57 0-103.3 46.3-103.3 103.3s46.3 103.3 103.3 103.3 103.3-46.3 103.3-103.3-46.3-103.3-103.3-103.3zm0 179.6c-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3 76.3 34.2 76.3 76.3-34.2 76.3-76.3 76.3z"></path>
              </svg>
              Cấu hÌnh
            </Link>
          </li>
          <li className="sidebar-list_item">
            <Link className="sidebar-list_link" to="/">
              Góp ý
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer"></div>
    </div>
  );
}

export default SidebarAcc;
