import React, { useEffect } from "react";
import "./Table.css";

export const Table = () => {
  useEffect(() => {
    const search = document.querySelector(".input-group input");
    const table_rows = document.querySelectorAll("tbody tr");
    const table_headings = document.querySelectorAll("thead th");

    // 1. Searching for specific data of HTML table
    search.addEventListener("input", searchTable);

    function searchTable() {
      table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase();
        let search_data = search.value.toLowerCase();

        row.classList.toggle("hide", table_data.indexOf(search_data) < 0);
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
      <main className="table">
        <section className="table__header">
          <h1>App</h1>
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
                  Car <span className="icon-arrow">↑</span>
                </th>
                <th>
                  {" "}
                  Brand <span className="icon-arrow">↑</span>
                </th>
                <th>
                  {" "}
                  Plate <span className="icon-arrow">↑</span>
                </th>
                <th>
                  {" "}
                  Status <span className="icon-arrow">↑</span>
                </th>
                <th>
                  {" "}
                  Owner <span className="icon-arrow">↑</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Honda Accord</td>
                <td>Honda</td>
                <td>29A-12345</td>
                <td>
                  <p class="status signed">Signed</p>
                </td>
                <td>
                  <strong>John Smith</strong>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Toyota Camry</td>
                <td>Toyota</td>
                <td>51B-98765</td>
                <td>
                  <p class="status pending">Pending</p>
                </td>
                <td>
                  <strong>Jane Doe</strong>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Ford Mustang</td>
                <td>Ford</td>
                <td>43C-24680</td>
                <td>
                  <p class="status not-signed">Not Signed</p>
                </td>
                <td>
                  <strong>Michael Johnson</strong>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>BMW X5</td>
                <td>BMW</td>
                <td>77D-54321</td>
                <td>
                  <p class="status signed">Signed</p>
                </td>
                <td>
                  <strong>Emily Wilson</strong>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mercedes-Benz E-Class</td>
                <td>Mercedes-Benz</td>
                <td>62E-78901</td>
                <td>
                  <p class="status signed">Signed</p>
                </td>
                <td>
                  <strong>David Thompson</strong>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Audi A4</td>
                <td>Audi</td>
                <td>36F-13579</td>
                <td>
                  <p class="status not-signed">Not Signed</p>
                </td>
                <td>
                  <strong>Sarah Anderson</strong>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Chevrolet Cruze</td>
                <td>Chevrolet</td>
                <td>18G-24680</td>
                <td>
                  <p class="status signed">Signed</p>
                </td>
                <td>
                  <strong>Alexander Lee</strong>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Hyundai Sonata</td>
                <td>Hyundai</td>
                <td>57H-98765</td>
                <td>
                  <p class="status pending">Pending</p>
                </td>
                <td>
                  <strong>Olivia Hernandez</strong>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Volvo XC60</td>
                <td>Volvo</td>
                <td>82J-54321</td>
                <td>
                  <p class="status not-signed">Not Signed</p>
                </td>
                <td>
                  <strong>Ethan Turner</strong>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Nissan Altima</td>
                <td>Nissan</td>
                <td>39K-78901</td>
                <td>
                  <p class="status signed">Signed</p>
                </td>
                <td>
                  <strong>Isabella Martin</strong>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Kia Sportage</td>
                <td>Kia</td>
                <td>74L-13579</td>
                <td>
                  <p class="status signed">Signed</p>
                </td>
                <td>
                  <strong>Lucas Rodriguez</strong>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>Subaru Forester</td>
                <td>Subaru</td>
                <td>25M-12345</td>
                <td>
                  <p class="status not-signed">Not Signed</p>
                </td>
                <td>
                  <strong>Victoria Kim</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};
