<template>
  <div id="aside" class="app-aside fade box-shadow-x nav-expand white" aria-hidden="true">
    <div class="sidenav hv">
      <!-- sidenav top -->
      <div class="navbar lt">
        <!-- brand -->
        <a href="../index.html" class="navbar-brand">
          <svg viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z" fill="#53a6fa" class="fill-theme"></path>
          </svg>
          <img src="../assets/images/logo.png" alt="." class="hide">
          <span class="hidden-folded d-inline">Nuggets</span>
        </a>
        <!-- / brand -->
      </div>

      <!-- Flex nav content -->
      <div class="flex hide-scroll">
        <div class="scroll">
          <div class="nav-active-text" data-nav="">
            <ul class="nav">
              <li class="active">
                <a href="#">
                        <span class="nav-icon">
                          <i class="fa fa-dashboard"></i>
                        </span>
                  <span class="nav-text">Dashboard</span>
                </a>
              </li>
              <li class="nav-header">
                <span class="text-xs hidden-folded">Finance</span>
              </li>
              <li class="active">
                <a href="#">
                        <span class="nav-caret">
                          <i class="fa fa-caret-down"></i>
                        </span>
                  <span class="nav-icon">
                          <i class="fa fa-money"></i>
                        </span>
                  <span class="nav-text">Transactions</span>
                </a>
                <ul class="nav-sub">
                  <li>
                    <a href="#/transactions">
                      <span class="nav-text">CS 123</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="nav-text">Postfinance</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="nav-text">Migrosbank</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/accounts">
                  <span class="nav-icon">
                          <i class="fa fa-adn"></i>
                        </span>
                  <span class="nav-text">Accounts</span>
                </a>
              </li>

              <li class="nav-header hidden-folded">
                <span class="text-xs">Supplier</span>
              </li>
              <li>
                <a href="#">
                  <span class="nav-badge">
                          <b class="badge badge-sm badge-pill danger">6</b>
                        </span>
                        <span class="nav-icon">
                          <i class="fa fa-inbox"></i>
                        </span>
                  <span class="nav-text">Mail</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="nav-icon">
                          <i class="fa fa-user"></i>
                        </span>
                  <span class="nav-text">Contacts</span>
                </a>
              </li>

              <li>
                <a href="#">
                        <span class="nav-icon">
                          <i class="fa fa-calendar"></i>
                        </span>
                  <span class="nav-text">Calendar</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- sidenav bottom -->
      <div class="py-2 mt-2 b-t no-shrink">
        <ul class="nav no-border">
          <li>
            <a href="#">
                      <span class="nav-icon">
                        <i class="fa fa-power-off"></i>
                      </span>
              <span class="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>
