<template>
  <div class="content-header white  box-shadow-0" id="content-header">
    <div class="navbar navbar-expand-lg">
      <!-- btn to toggle sidenav on small screen -->
      <a class="d-lg-none mx-2" data-toggle="modal" data-target="#aside">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M80 304h352v16H80zM80 248h352v16H80zM80 192h352v16H80z"></path></svg>
      </a>
      <!-- Page title -->
      <div class="navbar-text nav-title flex" id="pageTitle">Header</div>

      <ul class="nav flex-row order-lg-2">
        <!-- Notification -->
        <li class="nav-item dropdown">
          <a class="nav-link px-3" data-toggle="dropdown">
            <i class="fa fa-bell text-muted"></i>
            <span class="badge badge-pill up danger">6</span>
          </a>
          <!-- dropdown -->
          <div class="dropdown-menu dropdown-menu-right w-md animate fadeIn mt-2 p-0">
            <div class="scrollable hover" style="max-height: 250px">
              <div class="list">
                <div class="list-item " data-id="item-15">
	    	                  <span class="w-24 avatar circle indigo">
	    	                      <span class="fa fa-facebook"></span>
	    	                  </span>
                  <div class="list-body">
                    <a href="" class="item-title _500">Garrett Winters</a>

                    <div class="item-except text-sm text-muted h-1x">
                      Looking for some client-work
                    </div>

                    <div class="item-tag tag hide">
                    </div>
                  </div>
                  <div>
                    <span class="item-date text-xs text-muted">13:00</span>
                  </div>
                </div>
                <div class="list-item " data-id="item-5">
	    	                  <span class="w-24 avatar circle blue-grey">
	    	                      <span class="fa fa-github"></span>
	    	                  </span>
                  <div class="list-body">
                    <a href="" class="item-title _500">Radionomy</a>

                    <div class="item-except text-sm text-muted h-1x">
                      Competitive gaming ladders
                    </div>

                    <div class="item-tag tag hide">
                    </div>
                  </div>
                  <div>
                    <span class="item-date text-xs text-muted">09:50</span>
                  </div>
                </div>
                <div class="list-item " data-id="item-11">
	    	                  <span class="w-24 avatar circle blue">
	    	                      <span class="fa fa-code-fork"></span>
	    	                  </span>
                  <div class="list-body">
                    <a href="" class="item-title _500">Tiger Nixon</a>

                    <div class="item-except text-sm text-muted h-1x">
                      Looking for some client-work
                    </div>

                    <div class="item-tag tag hide">
                    </div>
                  </div>
                  <div>
                    <span class="item-date text-xs text-muted">16:00</span>
                  </div>
                </div>
                <div class="list-item " data-id="item-1">
	    	                  <span class="w-24 avatar circle grey">
	    	                      <span class="fa fa-comment"></span>
	    	                  </span>
                  <div class="list-body">
                    <a href="" class="item-title _500">Summerella</a>

                    <div class="item-except text-sm text-muted h-1x">
                      Send you a message
                    </div>

                    <div class="item-tag tag hide">
                    </div>
                  </div>
                  <div>
                    <span class="item-date text-xs text-muted">July 21</span>
                  </div>
                </div>
                <div class="list-item " data-id="item-8">
	    	                  <span class="w-24 avatar circle teal">
	    	                      <span class="fa fa-bolt"></span>
	    	                  </span>
                  <div class="list-body">
                    <a href="" class="item-title _500">RYD</a>

                    <div class="item-except text-sm text-muted h-1x">
                      Added you to repo
                    </div>

                    <div class="item-tag tag hide">
                    </div>
                  </div>
                  <div>
                    <span class="item-date text-xs text-muted">14:00</span>
                  </div>
                </div>
                <div class="list-item " data-id="item-4">
	    	                  <span class="w-24 avatar circle pink">
	    	                      <span class="fa fa-male"></span>
	    	                  </span>
                  <div class="list-body">
                    <a href="" class="item-title _500">Judith Garcia</a>

                    <div class="item-except text-sm text-muted h-1x">
                      Eddel upload a media
                    </div>

                    <div class="item-tag tag hide">
                    </div>
                  </div>
                  <div>
                    <span class="item-date text-xs text-muted">12:05</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex px-3 py-2 b-t">
              <div class="flex">
                <span>6 Notifications</span>
              </div>
              <a href="setting.html">See all <i class="fa fa-angle-right text-muted"></i></a>
            </div>
          </div>
          <!-- / dropdown -->
        </li>

        <!-- User dropdown menu -->
        <li class="dropdown d-flex align-items-center">
          <a href="#" data-toggle="dropdown" class="d-flex align-items-center">
	    	        <span class="avatar w-32">
	    	          <img src="../assets/images/a3.jpg" alt="...">
	    	        </span>
          </a>
          <div class="dropdown-menu dropdown-menu-right w pt-0 mt-2 animate fadeIn">
            <div class="row no-gutters b-b mb-2">
              <div class="col-4 b-r">
                <a href="app.user.html" class="py-2 pt-3 d-block text-center">
                  <i class="fa text-md fa-phone-square text-muted"></i>
                  <small class="d-block">Call</small>
                </a>
              </div>
              <div class="col-4 b-r">
                <a href="app.message.html" class="py-2 pt-3 d-block text-center">
                  <i class="fa text-md fa-comment text-muted"></i>
                  <small class="d-block">Chat</small>
                </a>
              </div>
              <div class="col-4">
                <a href="app.inbox.html" class="py-2 pt-3 d-block text-center">
                  <i class="fa text-md fa-envelope text-muted"></i>
                  <small class="d-block">Email</small>
                </a>
              </div>
            </div>
            <a class="dropdown-item" href="profile.html">
              <span>Profile</span>
            </a>
            <a class="dropdown-item" href="setting.html">
              <span>Settings</span>
            </a>
            <a class="dropdown-item" href="app.inbox.html">
              <span class="float-right"><span class="badge info">6</span></span>
              <span>Inbox</span>
            </a>
            <a class="dropdown-item" href="app.message.html">
              <span>Message</span>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="docs.html">
              Need help?
            </a>
            <a class="dropdown-item" href="signin.html">Sign out</a>
          </div>
        </li>
        <!-- Navarbar toggle btn -->
        <li class="d-lg-none d-flex align-items-center">
          <a href="#" class="mx-2" data-toggle="collapse" data-target="#navbarToggler">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path d="M64 144h384v32H64zM64 240h384v32H64zM64 336h384v32H64z"></path></svg>
          </a>
        </li>
      </ul>
      <!-- Navbar collapse -->
      <div class="collapse navbar-collapse no-grow order-lg-1" id="navbarToggler">
        <form class="input-group m-2 my-lg-0">
          <input type="text" class="form-control b-a no-bg no-shadow" placeholder="Search projects...">
          <span class="input-group-btn">
	    	        <button type="button" class="btn white b-a no-bg no-shadow"><i class="fa fa-search"></i></button>
	    	      </span>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

</style>
