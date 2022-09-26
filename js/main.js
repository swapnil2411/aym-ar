$(document).ready(function(){
    // Common Header
    class MyHeader extends HTMLElement{
        connectedCallback() {
            this.innerHTML = `
            <header>
        <div class="navbar_area">
            <div class="logo_area">
                <a href="index.html">
                    <img src="img/aym-logo.png" alt="logo" class="img-fluid">
                </a>
            </div>
            <div class="navbar_title">
                <h2>Annual Report 2021-22</h2>
            </div>
            <div class="menu_toogle">
                <div class="hamburger">
                    <iconify-icon icon="ci:menu-alt-02"></iconify-icon>
                    <span>MENU</span>
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
                                <li><a href="javascript:void">- Products</a></li>
                                <li><a href="javascript:void">- Presence</a></li>
                                <li><a href="javascript:void">- Path</a></li>
                                <li><a href="javascript:void">- Progress</a></li>
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
                                  <li><a href="javascript:void">- Quarter-on-Quarter data</a></li>
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
                                  <li><a href="javascript:void">- Annual Report (FY 21-22)</a></li>
                                  <li><a href="javascript:void">- MD&A</a></li>
                                  <li><a href="javascript:void">- Board Report & Annexures</a></li>
                                  <li><a href="javascript:void">- Corporate Governance Report</a></li>
                                  <li><a href="javascript:void">- Notice of AGM</a></li>
                                  <li><a href="javascript:void">- Financial Statements</a></li>
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
        delay: 50,
        time: 5000
    })
      
})

