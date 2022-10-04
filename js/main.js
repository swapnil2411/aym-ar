$(document).ready(function(){
    // Common Header
    class MyHeader extends HTMLElement{
        connectedCallback() {
            this.innerHTML = `
            <header>
      <div class="navbar_area">
          <div class="right_area">
            <div class="logo_area">
              <a href="index.html">
                  <img src="img/aym-logo.png" alt="logo" class="img-fluid">
              </a>
            </div>
            <div class="menu_toogle">
              <div class="hamburger">
                  <iconify-icon icon="ci:menu-alt-02"></iconify-icon>
                  <span>MENU</span>
              </div>
            </div>
          </div>
          <div class="left_area">
            <div class="navbar_title">
              <h2>Annual Report 2021-22</h2>
            </div>
          </div>
      </div>
      <aside>
          <div class="slider_logo">
            <a href="index.html">
              <img src="img/aym-logo.png" alt="logo" class="img-fluid">
            </a>
            <div class="close_slider">
              <div class="close_menu">
                <iconify-icon icon="ci:close-small"></iconify-icon>
                <span>Close</span>
              </div>
            </div>
          </div>
          <div class="slider_menu">
              <div id="accordion">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <span>Scaling New Heights</span>
                          <iconify-icon icon="prime:angle-down"></iconify-icon>
                        </button>
                      </h5>
                    </div>
                
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                      <div class="card-body">
                          <ul>
                              <li><a href="scalingnewheights.html">- Strength and Transformation at our Core</a></li>
                          </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <span>Continued Growth Through Consistent Action</span>
                          <iconify-icon icon="prime:angle-down"></iconify-icon>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div class="card-body">
                          <ul>
                              <li><a href="numberthatdefineus.html">- Numbers that Define Us</a></li>
                              <li><a href="mdmessage.html">- Read the Full MD & CEO Message</a></li>
                              <li><a href="leadership.html">- Meet Our Leadership</a></li>
                          </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <span>Corporate Overview & Our Core Values</span>
                          <iconify-icon icon="prime:angle-down"></iconify-icon>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div class="card-body">
                          <ul>
                              <li><a href="products.html">- Products</a></li>
                              <li><a href="ourpresence.html">- Presence</a></li>
                              <li><a href="path.html">- Path</a></li>
                              <li><a href="progress.html">- Progress</a></li>
                              <li><a href="visionprinciple.html">- Vision and Principles</a></li>
                          </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                      <div class="card-header" id="headingFour">
                        <h5 class="mb-0">
                          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <span>A Year in review</span>
                            <iconify-icon icon="prime:angle-down"></iconify-icon>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li><a href="quarterresults.html">- Quarter-on-Quarter data</a></li>
                            </ul>
                        </div>
                      </div>
                  </div>

                  <div class="card">
                      <div class="card-header" id="headingFive">
                          <h5 class="mb-0">
                              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                              <a href="createvalueeveryone.html">Creating Value Financial Capital</a>
                              </button>
                          </h5>
                      </div>
                  </div>

                  <div class="card">
                      <div class="card-header" id="headingSix">
                        <h5 class="mb-0">
                          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            <span>Enhancing Our Capabilities</span>
                            <iconify-icon icon="prime:angle-down"></iconify-icon>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li><a href="digitalcapabilities.html">- Digital</a></li>
                                <li><a href="empoweringpeople.html">- People</a></li>
                                <li><a href="communities.html">- Communities</a></li>
                            </ul>
                        </div>
                      </div>
                  </div>

                  <div class="card">
                      <div class="card-header" id="headingSeven">
                        <h5 class="mb-0">
                          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            <span>Future Ready</span>
                            <iconify-icon icon="prime:angle-down"></iconify-icon>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li><a href="capitalcommitment.html">- Commitment to Capital</a></li>
                                <li><a href="commitmentnotzero.html">- Commitment to Net Zero</a></li>
                                <li><a href="strategicgoals.html">- Commitment to Strategic Goals</a></li>
                            </ul>
                        </div>
                      </div>
                  </div>

                  <div class="card">
                      <div class="card-header" id="headingEight">
                        <h5 class="mb-0">
                          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            <span>Download Center (all link to diff PDFs)</span>
                            <iconify-icon icon="prime:angle-down"></iconify-icon>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li><a href="https://www.aymsyntex.com/report/annual-report/annual-report-1057972342-ar-report-aym-final-21-22.pdf" target="_blank">- Annual Report (FY 21-22)</a></li>
                                <li><a href="https://aymsyntex.com/resources/pdf/AR21-22/MDA.pdf" target="_blank">- MD&A</a></li>
                                <li><a href="https://aymsyntex.com/resources/pdf/Boards-Report-and-Annexures.pdf" target="_blank">- Board Report & Annexures</a></li>
                                <li><a href="https://aymsyntex.com/resources/pdf/AR21-22/Corporate-Governance-Report.pdf" target="_blank">- Corporate Governance Report</a></li>
                                <li><a href="https://aymsyntex.com/share-holder/notice/notice-228794907-39th-agm-notice-fy-2021-22.pdf" target="_blank">- Notice of AGM</a></li>
                                <li><a href="https://aymsyntex.com/resources/pdf/AR21-22/Financial-statementspdf.pdf" target="_blank">- Financial Statements</a></li>
                            </ul>
                        </div>
                      </div>
                  </div>

              </div>
          </div>
      </aside>
    </header>
            `
        }
    }
    customElements.define('my-header', MyHeader);
    //Menu Toggle
    $('.hamburger').on('click', function(){
        $('aside').addClass('show_sidebar');
        $(this).css('visibility','hidden');
    });

    $('.close_menu').on('click', function(){
        $('aside').removeClass('show_sidebar');
        $('.hamburger').css('visibility','visible')
    })

    new WOW().init();

    $('.count-up').counterUp({
        delay: 5,
        time: 1500
    })

    $('.nav_bullet a').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
    })

    const ctx = document.getElementById('revenuechart');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Q1 20-21','Q2 20-21','Q3 20-21','Q4 20-21','Q1 21-22','Q2 21-22','Q3 21-22','Q4 21-22'],
          datasets: [{
              label: 'Revenue',
              data: [91.2, 212.4, 294.2, 349.7, 306.0, 379.3, 400.9, 405.3],
              backgroundColor: [
                  'rgba(188, 191, 192, 1)',
                  'rgba(188, 191, 192, 1)',
                  'rgba(188, 191, 192, 1)',
                  'rgba(188, 191, 192, 1)',
                  'rgba(197, 31, 37, 1)',
                  'rgba(197, 31, 37, 1)',
                  'rgba(197, 31, 37, 1)',
                  'rgba(197, 31, 37, 1)',
              ]
          }]
      },
      options: {
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Revenue from operations (₹ Crores)',
              align: 'start',
              padding: {
                bottom: 40,
              },
              font: {
                size: 20
              }
            }
          }
      }
    });

    const ctx1 = document.getElementById('ebitdachart');
    const myChart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
          labels: ['Q1 20-21','Q2 20-21','Q3 20-21','Q4 20-21','Q1 21-22','Q2 21-22','Q3 21-22','Q4 21-22'],
          datasets: [{
              label: 'EBITDA',
              data: [-5.6, 21.1, 35.4, 43.4, 33.3, 43.2, 44.3, 45.3],
              backgroundColor: [
                  'rgba(188, 191, 192, 1)',
                  'rgba(188, 191, 192, 1)',
                  'rgba(188, 191, 192, 1)',
                  'rgba(188, 191, 192, 1)',
                  'rgba(197, 31, 37, 1)',
                  'rgba(197, 31, 37, 1)',
                  'rgba(197, 31, 37, 1)',
                  'rgba(197, 31, 37, 1)',
              ]
          }]
      },
      options: {
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'EBITDA (₹ Crores)',
              align: 'start',
              padding: {
                bottom: 40,
              },
              font: {
                size: 20
              }
            },
          }
      }
    });



    
    
})

