import React, { useEffect, useState } from "react";
import "./Table.css";

import { BrowserRouter as Route, Link, Routes } from "react-router-dom";

export const Table = () => {
  useEffect(() => {
    const search = document.querySelector(".input-group input");
    const table_rows = document.querySelectorAll("tbody tr");
    const table_headings = document.querySelectorAll("thead th");
    

    /// Update the data count in the table header
    const updateDataCount = () => {
      const visibleRows = document.querySelectorAll("tbody tr:not(.hide)");
      const dataCount = visibleRows.length;
      const dataCountElement = document.querySelector(".data-count span");
      if (dataCountElement) {
        dataCountElement.textContent = dataCount.toString();
      }
    };

    // Call updateDataCount whenever the table rows change
    const observer = new MutationObserver(updateDataCount);
    observer.observe(document.querySelector("tbody"), {
      childList: true,
      subtree: true,
    });
    updateDataCount();

    // Update the data count when search input value changes
    const searchInput = document.querySelector(".input-group input");
    if (searchInput) {
      searchInput.addEventListener("input", updateDataCount);
    }

    // 1. Searching for specific data of HTML table
    search.addEventListener("input", searchTable);

    function searchTable() {
      table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase();
        let search_value = search.value.toLowerCase();
        let search_labels = search_value.split(" ");

        let isMatch = search_labels.every((label) => {
          return table_data.indexOf(label) > -1;
        });

        row.classList.toggle("hide", !isMatch);
        row.style.setProperty("--delay", i / 25 + "s");
      });

      document
        .querySelectorAll("tbody tr:not(.hide)")
        .forEach((visible_row, i) => {
          visible_row.style.backgroundColor =
            i % 2 === 0 ? "transparent" : "#0000000b";
        });
    }

    // 2. Sorting | Ordering data of HTML table
    table_headings.forEach((head, i) => {
      let sort_asc = true;
      head.onclick = () => {
        table_headings.forEach((head) => head.classList.remove("active"));
        head.classList.add("active");

        document
          .querySelectorAll("td")
          .forEach((td) => td.classList.remove("active"));
        table_rows.forEach((row) => {
          row.querySelectorAll("td")[i].classList.add("active");
        });

        head.classList.toggle("asc", sort_asc);
        sort_asc = head.classList.contains("asc") ? false : true;

        sortTable(i, sort_asc);
      };
    });

    function sortTable(column, sort_asc) {
      [...table_rows]
        .sort((a, b) => {
          let first_row = a
            .querySelectorAll("td")
            [column].textContent.toLowerCase();
          let second_row = b
            .querySelectorAll("td")
            [column].textContent.toLowerCase();

          if (/^\d+$/.test(first_row) && /^\d+$/.test(second_row)) {
            return sort_asc
              ? parseInt(first_row, 10) - parseInt(second_row, 10)
              : parseInt(second_row, 10) - parseInt(first_row, 10);
          } else {
            return sort_asc
              ? first_row < second_row
                ? 1
                : -1
              : first_row < second_row
              ? -1
              : 1;
          }
        })
        .map((sorted_row) =>
          document.querySelector("tbody").appendChild(sorted_row)
        );
    }
  }, []);


  return (
    <div className="Table">
      <div className="intro-header">
        <div className="intro-content">
          <div className="intro-text">
            <h1 className="header-jumbo">RegistryTotal-Statistical table</h1>
            <p className="p-bigger">
              Danh sách thông tin về các xe đã đằng kiểm, sắp đăng kiểm, hoặc
              sắp hết hạn
            </p>
          </div>
        </div>
      </div>
      <main className="table">
        <section className="table__header">
          {/* <div className="fitler">
            <input type="radio" name="check-radio" id="fitler-1" />
            <input type="radio" name="check-radio" id="fitler-2" />
            <input type="radio" name="check-radio" id="fitler-3" />
            <div className="fitler-list">
              <label htmlFor="fitler-1">
                <span className="dot one"></span>
                <span className="check-radio">Lọc các xe đăng kiểm</span>
              </label>
              <label htmlFor="fitler-2">
                <span className="dot two"></span>
                <span className="check-radio">Lọc các xe sắp đăng kiểm</span>
              </label>
              <label htmlFor="fitler-3">
                <span className="dot three"></span>
                <span className="check-radio">
                  Lọc các xe sắp hết hiệu lực đăng kiểm
                </span>
              </label>
            </div>
          </div> */}
          <div className="data-count">
            Total Data: <span>0</span>
          </div>
          <div className="input-group">
            <input type="search" placeholder="Search Data..." />
            <i className="ri-search-line" />
          </div>
        </section>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>
                  {" "}
                  Id <span className="icon-arrow">↑</span>
                </th>
                <th>
                  {" "}
                  Tên Xe <span className="icon-arrow">↑</span>
                </th>
                <th>
                  {" "}
                  Chủ xe <span className="icon-arrow">↑</span>
                </th>
                <th>
                  {" "}
                  Biển xe <span className="icon-arrow">↑</span>
                </th>
                <th>
                  {" "}
                  Trạng Thái Đăng Ký <span className="icon-arrow">↑</span>
                </th>
                <th>
                  {" "}
                  Ngày Đăng Ký <span className="icon-arrow">↑</span>
                </th>
                <th>
                  {" "}
                  Ngày Hết Hạn <span className="icon-arrow">↑</span>
                </th>
                <th>
                  {" "}
                  Còn hiệu lực <span className="icon-arrow">↑</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="profile-link">
                  <Link to="/carinfo">
                    <strong>Honda Accord</strong>
                  </Link>
                </td>
                <td className="profile-link">
                  <Link to="/userinfo">
                    <strong>Seele Vollerei</strong>
                  </Link>
                </td>
                <td>29A-12345</td>
                <td>
                  <p className="status signed">Signed</p>
                </td>
                <td>7/2/2021</td>
                <td>18/10/2023</td>
                <td>xx ngày</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="profile-link">
                  <Link to="/carinfo">
                    <strong>BMW Idk</strong>
                  </Link>
                </td>
                <td className="profile-link">
                  <Link to="/userinfo">
                    <strong>Seele Vollerei</strong>
                  </Link>
                </td>
                <td>29A-12345</td>
                <td>
                  <p className="status pending">Pending</p>
                </td>
                <td>7/2/2021</td>
                <td>18/10/2023</td>
                <td>xx ngày</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="profile-link">
                  <Link to="/carinfo">
                    <strong>Honda Accord</strong>
                  </Link>
                </td>
                <td className="profile-link">
                  <Link to="/userinfo">
                    <strong>Seele Vollerei</strong>
                  </Link>
                </td>
                <td>29A-12345</td>
                <td>
                  <p className="status not-signed">Not Signed</p>
                </td>
                <td>7/2/2021</td>
                <td>18/10/2023</td>
                <td>xx ngày</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};
