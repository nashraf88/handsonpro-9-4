/*
      JavaScript 6th Edition
      Chapter 7
      Hands-on Project 9-4

      Author: Nazia Ashraf
      Date: 3/6/2023

      Filename: script.js
   */
      "use strict";
      function processCookie() {
        var expiresDate = new Date();
        if (document.getElementById("rememberinput").checked) {
          expiresDate.setMinutes(expiresDate.getMinutes() + 2);
          document.cookie = "username=" + document.getElementById("usernameinput").value + "; expires=" + expiresDate.toUTCString();
        } else {
          expiresDate.setDate(expiresDate.getDate () - 7);
          document.cookie = "username=null; expires=" + expiresDate.toUTCString();
        }
      }

      function populateInfo() {
        if (document.cookie) {
            var uname = document.cookie;
            uname = uname.substring(uname.lastIndexOf("=") + 1);
            document.getElementById("usernameinput").value = uname;
        }
      }

      function handleSubmit(evt) {
        if (evt.preventDefault) {
            evt.preventDefault ();
        } else {
            evt.returnValue = false;
        }
        processCookie();
        document.getElementsByTagName("form")[0].submit();
      }

      function createEventListener () {
        var loginForm = document.getElementsByTagName("form")[0];
        if (loginForm.addEventListener) {
            loginForm.addEventListener("submit", handleSubmit, false);
        } else if (loginForm.attachEvent) {
            loginForm.attachEvent("onsubmit", handleSubmit);
        }
      }
      function setUpPage () {
        populateInfo();
        createEventListener();
      }
      if (window.addEventListener) {
        window.addEventListener("load", setUpPage, false);
      } else if (window.attachEvent) {
        window.attachEvent("onload", setUpPage);
      }