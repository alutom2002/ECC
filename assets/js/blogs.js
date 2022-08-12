const contain = document.querySelector('.bigcard-container');
const pageNumber = document.querySelector('.page-number')

let perPage = 4;
let idPage = 1;
let start = 0;
let end = perPage;

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

const blogs = {
    cards: [{
        title: "Lorem ipsum dolor sit amet consectetur elit. Assumenda eveniet sit accusamus quisquam",
        author: "Trần Trọng Nghĩa",
        auimg: "/assets/img/avatar",
        time: "07/08/2022",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis ipsa reprehenderit blanditiis quas quis voluptatum obcaecati accusamus earum quibusdam, exercitationem, nesciunt, molestiae dolorem quasi vitae voluptate repellendus est consequuntur!",
        img: "/assets/img/img1",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur elit. Assumenda eveniet sit accusamus quisquam",
        author: "Trần Trọng Nghĩa",
        auimg: "/assets/img/avatar",
        time: "07/08/2022",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis ipsa reprehenderit blanditiis quas quis voluptatum obcaecati accusamus earum quibusdam, exercitationem, nesciunt, molestiae dolorem quasi vitae voluptate repellendus est consequuntur!",
        img: "/assets/img/img2",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur elit. Assumenda eveniet sit accusamus quisquam",
        author: "Trần Trọng Nghĩa",
        auimg: "/assets/img/avatar",
        time: "07/08/2022",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis ipsa reprehenderit blanditiis quas quis voluptatum obcaecati accusamus earum quibusdam, exercitationem, nesciunt, molestiae dolorem quasi vitae voluptate repellendus est consequuntur!",
        img: "/assets/img/img3",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur elit. Assumenda eveniet sit accusamus quisquam",
        author: "Trần Trọng Nghĩa",
        auimg: "/assets/img/avatar",
        time: "07/08/2022",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis ipsa reprehenderit blanditiis quas quis voluptatum obcaecati accusamus earum quibusdam, exercitationem, nesciunt, molestiae dolorem quasi vitae voluptate repellendus est consequuntur!",
        img: "/assets/img/img4",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur elit. Assumenda eveniet sit accusamus quisquam",
        author: "Trần Trọng Nghĩa",
        auimg: "/assets/img/avatar",
        time: "07/08/2022",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis ipsa reprehenderit blanditiis quas quis voluptatum obcaecati accusamus earum quibusdam, exercitationem, nesciunt, molestiae dolorem quasi vitae voluptate repellendus est consequuntur!",
        img: "/assets/img/img5",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur elit. Assumenda eveniet sit accusamus quisquam",
        author: "Trần Trọng Nghĩa",
        auimg: "/assets/img/avatar",
        time: "07/08/2022",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis ipsa reprehenderit blanditiis quas quis voluptatum obcaecati accusamus earum quibusdam, exercitationem, nesciunt, molestiae dolorem quasi vitae voluptate repellendus est consequuntur!",
        img: "/assets/img/img6",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur elit. Assumenda eveniet sit accusamus quisquam",
        author: "Trần Trọng Nghĩa",
        auimg: "/assets/img/avatar",
        time: "07/08/2022",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis ipsa reprehenderit blanditiis quas quis voluptatum obcaecati accusamus earum quibusdam, exercitationem, nesciunt, molestiae dolorem quasi vitae voluptate repellendus est consequuntur!",
        img: "/assets/img/img7",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur elit. Assumenda eveniet sit accusamus quisquam",
        author: "Trần Trọng Nghĩa",
        auimg: "/assets/img/avatar",
        time: "07/08/2022",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis ipsa reprehenderit blanditiis quas quis voluptatum obcaecati accusamus earum quibusdam, exercitationem, nesciunt, molestiae dolorem quasi vitae voluptate repellendus est consequuntur!",
        img: "/assets/img/about1",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur elit. Assumenda eveniet sit accusamus quisquam",
        author: "Trần Trọng Nghĩa",
        auimg: "/assets/img/avatar",
        time: "07/08/2022",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis ipsa reprehenderit blanditiis quas quis voluptatum obcaecati accusamus earum quibusdam, exercitationem, nesciunt, molestiae dolorem quasi vitae voluptate repellendus est consequuntur!",
        img: "/assets/img/about2",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur elit. Assumenda eveniet sit accusamus quisquam",
        author: "Trần Trọng Nghĩa",
        auimg: "/assets/img/avatar",
        time: "07/08/2022",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis ipsa reprehenderit blanditiis quas quis voluptatum obcaecati accusamus earum quibusdam, exercitationem, nesciunt, molestiae dolorem quasi vitae voluptate repellendus est consequuntur!",
        img: "/assets/img/about3",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur elit. Assumenda eveniet sit accusamus quisquam",
        author: "Trần Trọng Nghĩa",
        auimg: "/assets/img/avatar",
        time: "07/08/2022",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis ipsa reprehenderit blanditiis quas quis voluptatum obcaecati accusamus earum quibusdam, exercitationem, nesciunt, molestiae dolorem quasi vitae voluptate repellendus est consequuntur!",
        img: "/assets/img/about4",
    },
    ],

    render: function () {
        const htmls = this.cards.map((i, index) => {
            if (index >= start && index < end)
                return `
      <div class="col-md-12">
      <div class="row big-card">
          <div class="col-md-3">
              <div class="card-img">
                  <img src=".${i.img}.jpg" class="w-100" style="height: 200px;
                  object-fit: cover;">
              </div>
          </div>
          <div class="col-md-9">
              <a href="#" class="card-title">
                  ${i.title}
              </a>
              <div class="row">
                  <div class="col-md-2">
                      <img src="${i.auimg}.png" alt="" class="w-50 rounded-circle">
                  </div>
                  <div class="col-md-10" style="margin-left: -5%;">
                      <a href="#" class="card-blogger">
                          ${i.author}
                      </a>
                      <div class="card-time">
                          ${i.time}
                      </div>
                  </div>
              </div>
              <div class="card-content">
                  ${i.content}
              </div>
          </div>
      </div>
  </div>
      `
        })
        contain.innerHTML = htmls.join('');
    },

    renderList: function () {
        const totalPages = Math.ceil(this.cards.length / perPage);
        let htmls = '';
        htmls += `<li class="pagination-item pagination-item--active">
        <a href="#" class="pagination-item__link">${1}</a>
        </li>`;
        for (let i = 2; i <= totalPages; i++) {
            htmls += `<li class="pagination-item">
            <a href="#" class="pagination-item__link">${i}</a>
        </li>`
        }
        if (totalPages === 0) {
            htmls = '';
        }
        pageNumber.innerHTML = htmls;
    },

    getCurrentPage: function (indexPage) {
        start = (indexPage - 1) * perPage;
        end = indexPage * perPage;
    },

    changePage: function () {
        const idPages = document.querySelectorAll('.page-number li');
        for (let i = 0; i < idPages.length; i++) {
            idPages[i].onclick = function () {
                let value = i + 1;
                const current = document.getElementsByClassName('pagination-item--active');
                current[0].className = current[0].className.replace('pagination-item--active', '');
                this.classList.add('pagination-item--active');
                let idPage = value;
                blogs.getCurrentPage(idPage);
                blogs.render();
            };
        }
    },

    handle: function () {
        const totalPages = Math.ceil(this.cards.length / perPage);
        const idPages = document.querySelectorAll('.page-number li');

        btnNext.onclick = function () {
            idPage++;
            if (idPage > totalPages) {
                idPage = totalPages;
            };
            for (let i = 1; i <= idPages.length; i++) {
                if (i + 1 === idPage) {
                    const current = document.getElementsByClassName('pagination-item--active');
                    current[0].className = current[0].className.replace('pagination-item--active', '');
                    idPages[i].classList.add('pagination-item--active');
                }
            };
            console.log(idPage);
            blogs.getCurrentPage(idPage);
            blogs.render();
        };

        btnPrev.onclick = function () {
            idPage--;
            if (idPage <= 0) {
                idPage = 1;
            }
            for (let i = 0; i < idPages.length; i++) {
                if (i+1 === idPage) {
                    const current = document.getElementsByClassName('pagination-item--active');
                    current[0].className = current[0].className.replace('pagination-item--active', '');
                    idPages[i].classList.add('pagination-item--active');
                }
            };
            console.log(idPage);

            blogs.getCurrentPage(idPage);
            blogs.render();
        };
    },

    start: function () {
        this.render();

        this.renderList();

        this.changePage();

        this.handle();
    }
}

blogs.start();