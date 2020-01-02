





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-hddDYPWR0gBbqLRmIZP242WMEiYsVkYI2UCYCVUHB4h5DhD2cbtFJYG+HPh21dZGb+sbgDHxQBNJCBq7YbmlBQ==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-02a3eaa24db2bd1ed9b64450595fc2cf.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-Fr8GYcjC9Pwm6dQmefd4vXX2fXl7gylXrhSo2aMCxM0Ilrme82PXVtfHOzcnvR9vUmfvO8t8XVmNxW1FRnoYSg==" rel="stylesheet" href="https://github.githubassets.com/assets/github-8f8f40cebc9aea61f6dac776b58ccad9.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>algolia/instantsearch.js: ⚡️ A JavaScript library for building performant and instant search experiences with Algolia.</title>
    <meta name="description" content="⚡️ A JavaScript library for building performant and instant search experiences with Algolia. - algolia/instantsearch.js">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars3.githubusercontent.com/u/2034458?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="algolia/instantsearch.js" /><meta name="twitter:description" content="⚡️ A JavaScript library for building performant and instant search experiences with Algolia. - algolia/instantsearch.js" />
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/2034458?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="algolia/instantsearch.js" /><meta property="og:url" content="https://github.com/algolia/instantsearch.js" /><meta property="og:description" content="⚡️ A JavaScript library for building performant and instant search experiences with Algolia. - algolia/instantsearch.js" />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDU1NDk5OTM2OmExYmExZTJlZDRiZjk2NjYxMTY4NmQ5YTY4MjhiOWQ5ZDZkYjEyNjg5YzQ1ZWVhYzU2ODBkYmUwNWRmNmMzZTE=--5b2a6c65168144f348a5154792addabcceffe5de">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="request-id" content="BFA4:6D2B:542E128:93E025C:5E0C46A9" data-pjax-transient>



  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

    <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="BFA4:6D2B:542E128:93E025C:5E0C46A9" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-dimension-visitor_id" content="909142460991526530" /><meta name="octolytics-actor-id" content="44134283" /><meta name="octolytics-actor-login" content="infominer33" /><meta name="octolytics-actor-hash" content="7ab6567cffe976fd6cc274b582e61b453c3964afa6e047077a910df0d1415e0d" />

<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="d87291c7272ccc224baef9878415980e">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="infominer33">

      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="ODI1N2YxNDNkZTE5MWNhODMwMTMzZDE1OWM5NTUzYTBjYjljNWViNDNlNjM4YTE1YjA1NDc1ZjU4ZDcwODRmMXx7InJlbW90ZV9hZGRyZXNzIjoiNjguMTMzLjU4LjI0MCIsInJlcXVlc3RfaWQiOiJCRkE0OjZEMkI6NTQyRTEyODo5M0UwMjVDOjVFMEM0NkE5IiwidGltZXN0YW1wIjoxNTc3ODYyODYxLCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,NOTIFY_ON_BLOCK,RELATED_ISSUES,GHE_CLOUD_TRIAL">

    <meta name="html-safe-nonce" content="58554dc741d5eebfcc34550d655e936c38df3034">

  <meta http-equiv="x-pjax-version" content="88749827de37e0e1ebd70bc0919cebf3">
  

      <link href="https://github.com/algolia/instantsearch.js/commits/develop.atom" rel="alternate" title="Recent Commits to instantsearch.js:develop" type="application/atom+xml">

  <meta name="go-import" content="github.com/algolia/instantsearch.js git https://github.com/algolia/instantsearch.js.git">

  <meta name="octolytics-dimension-user_id" content="2034458" /><meta name="octolytics-dimension-user_login" content="algolia" /><meta name="octolytics-dimension-repository_id" content="39443258" /><meta name="octolytics-dimension-repository_nwo" content="algolia/instantsearch.js" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="39443258" /><meta name="octolytics-dimension-repository_network_root_nwo" content="algolia/instantsearch.js" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/algolia/instantsearch.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  <meta name="webauthn-auth-enabled" content="true">

  <meta name="webauthn-registration-enabled" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production min-width-lg">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    
    


          <header class="Header" role="banner">

    <div class="Header-item">
      <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

    </div>


    <div class="Header-item Header-item--full">
        <div class="header-search mr-3 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="39443258" data-scoped-search-url="/algolia/instantsearch.js/search" data-unscoped-search-url="/search" action="/algolia/instantsearch.js/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=oaLVgxQ5yelxtTIimLq7PFSFFMNyJJL7/aTR5cErGdSKnCuV5cm/bLpakVh9X2E+/8pxJtaiMGi6hJ+Q21oZgA=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex" aria-label="Global">

  <a class="js-selected-navigation-item Header-link  mr-3" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-3" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div class="mr-3">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-3" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>

</nav>

    </div>



    <div class="Header-item">
      

    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:44134283" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </div>


    <div class="Header-item position-relative">
      <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="algolia/instantsearch.js">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/algolia/instantsearch.js/issues/new/choose" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0">
      
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/infominer33/feature_preview/indicator_check.json">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img alt="@infominer33" class="avatar" src="https://avatars1.githubusercontent.com/u/44134283?s=40&amp;v=4" height="20" width="20">
      <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/infominer33" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">infominer33</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:2034458,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:44134283,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;}}" data-hydro-click-hmac="36d34977795a7b7ed1bfd5a5ac52d5a86d05d87fe0acee2ee9d84c0eb1135fee">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="Sa49PAlgTICLzvbFqmvtBWoHx+ZSZtSaqpqC2/00w83HXyTYZ8Mg0TOnHApa+YSSPLz4S6KrnFWSSI2UMXx3ZA==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
            

<div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2020-01-01T02:44:21-05:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2020-01-01T03:14:21-05:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2020-01-01T06:14:21-05:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2020-01-01T23:59:59-05:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2020-01-05T23:59:59-05:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/infominer33" data-ga-click="Header, go to profile, text:your profile">Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/infominer33?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/infominer33?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/infominer33?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/infominer33/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}"
    data-feature-preview-close-hmac="eabfe088c2c67f70bd1aae8b7bf36cee6ecb70aa4946a9e4ac999d20ce36be3d"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}"
    data-hydro-click-hmac="48a25f61089ce933fb8cf94ecfbf64346b7b1b6a5de8fb32db9e8b899db4b065"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="2/CwccZHVekpNcKIqet/TOFyN/VwGYzTEp79Kt9f7GZVFr9gmA/bTXHKjr6lfysAdQfUajn7jbbjEwChjvj33g==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
      <input type="text" name="required_field_4d46" hidden="hidden" class="form-control" />
<input type="hidden" name="timestamp" value="1577862861364" class="form-control" />
<input type="hidden" name="timestamp_secret" value="dc7873ac3f6f3146a466e4c2838ada47dfb8291e16d16557ba354ab17a22c9ce" class="form-control" />

</form>  </details-menu>
</details>

    </div>

  </header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container" data-pjax-container >
      
  



  









  <div class=" pagehead repohead readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">



    <li >
      
    <details class="dropdown details-reset details-overlay d-inline-block float-left"
      data-deferred-details-content-url="/algolia/instantsearch.js/used_by_contents"
    >
      <summary class="btn btn-sm btn-with-count" data-menu-button>
        <svg class="octicon octicon-package v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 00-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z"/></svg>
        Used by
        <div class="dropdown-caret"></div>
      </summary>
      <include-fragment accept="text/html; fragment">
        <div class="dropdown-menu dropdown-menu-s p-3 text-center" style="width:360px;">
          <img width="32" height="32" alt="Loading..." class="my-0" src="https://github.githubassets.com/images/spinners/octocat-spinner-64.gif" />
          <p class="pt-1 m-0 f5 text-gray-light">
            Loading dependents...
          </p>
        </div>
      </include-fragment>
    </details>
    <a class="social-count"
      href="/algolia/instantsearch.js/network/dependents?package_id=UGFja2FnZS0xODI5ODEwMQ%3D%3D"
      aria-label="782 repositories depend on this package"
    >
      782
    </a>

    </li>

  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="9crezopbDrDvGuZzVVFcQT0FMgdvZqElUAH2kXYUooPKS3asRYLfEzQ3qAmTmdBUnP+p1BqYuL+Humv3bh0niA==" />      <input type="hidden" name="repository_id" value="39443258">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:39443258,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="df5aafc76c1d74737ce0de62fd26ad5716e9a68294159b1e8c9638d211eb2b56" data-ga-click="Repository, click Watch settings, action:files#disambiguate">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/algolia/instantsearch.js/watchers"
          aria-label="102 users are watching this repository">
          102
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/algolia/instantsearch.js/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="C3oie4creDnIDWF6DeVqFf65jhKj6+dO3njM6x9Y2iVKB/dLTI830oCRIi4IU73x2I+MKifuIOPUZo+GO8+z6Q==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar algolia/instantsearch.js" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:39443258,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="0e2d9a3bd6ed76e1bcfa40c4dfc64f03dd397a21e70bf92ff1eeddaddd04b236" data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">        <svg aria-label="star" height="16" class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>

        Unstar
</button>        <a class="social-count js-social-count" href="/algolia/instantsearch.js/stargazers"
           aria-label="2385 users starred this repository">
           2.4k
        </a>
</form>
    <form class="unstarred js-social-form" action="/algolia/instantsearch.js/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="KB42MCGolGJ+TrEEOggVBy+zhNUpEnzg0pRu6PGl2J2KgNw2/uHajMFyaeQ45w8oR0Ft2P/r771df1OXjmQLEA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star algolia/instantsearch.js" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:39443258,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="09955ff4fe5e0b51725afc04ab25b841bed41a4fb9092ac6779fcd5d5926fd53" data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">        <svg aria-label="star" height="16" class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>

        Star
</button>        <a class="social-count js-social-count" href="/algolia/instantsearch.js/stargazers"
           aria-label="2385 users starred this repository">
          2.4k
        </a>
</form>  </div>

  </li>

  <li>
          <details class="details-reset details-overlay details-overlay-dark d-inline-block float-left">
            <summary class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:39443258,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="7c320cc6294ee79dd1774ee924d9996a50831e24aed7cd5f803a2d1038cc8bf5" data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork" title="Fork your own copy of algolia/instantsearch.js to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</summary>            <details-dialog
              class="anim-fade-in fast Box Box--overlay d-flex flex-column"
              src="/algolia/instantsearch.js/fork?fragment=1"
              preload>
              <div class="Box-header">
                <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
                  <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
                </button>
                <h3 class="Box-title">Fork instantsearch.js</h3>
              </div>
              <div class="overflow-auto text-center">
                <include-fragment>
                  <div class="octocat-spinner my-3" aria-label="Loading..."></div>
                  <p class="f5 text-gray">If this dialog fails to load, you can visit <a href="/algolia/instantsearch.js/fork">the fork page</a> directly.</p>
                </include-fragment>
              </div>
            </details-dialog>
          </details>

    <a href="/algolia/instantsearch.js/network/members" class="social-count"
       aria-label="350 users forked this repository">
      350
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/algolia/hovercard" href="/algolia">algolia</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/algolia/instantsearch.js">instantsearch.js</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /algolia/instantsearch.js" href="/algolia/instantsearch.js">
      <div class="d-inline"><svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg></div>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /algolia/instantsearch.js/issues" href="/algolia/instantsearch.js/issues">
        <div class="d-inline"><svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg></div>
        <span itemprop="name">Issues</span>
        <span class="Counter">61</span>
        <meta itemprop="position" content="2">
</a>    </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" data-skip-pjax="true" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /algolia/instantsearch.js/pulls" href="/algolia/instantsearch.js/pulls">
      <div class="d-inline"><svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg></div>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">16</span>
      <meta itemprop="position" content="4">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /algolia/instantsearch.js/actions" href="/algolia/instantsearch.js/actions">
        <div class="d-inline"><svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"/></svg></div>
        Actions
</a>
    </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /algolia/instantsearch.js/projects" href="/algolia/instantsearch.js/projects">
      <div class="d-inline"><svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg></div>
      Projects
      <span class="Counter" >0</span>
</a>


    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /algolia/instantsearch.js/security/advisories" href="/algolia/instantsearch.js/security/advisories">
      <div class="d-inline"><svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg></div>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /algolia/instantsearch.js/pulse" href="/algolia/instantsearch.js/pulse">
      <div class="d-inline"><svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg></div>
      Insights
</a>

</nav>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  px-3">
  <div class="repository-content ">

    
    
    

      <div class="">  <div class="f4">
        <span class="text-gray-dark mr-2" itemprop="about">
          
<g-emoji class="g-emoji" alias="zap" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26a1.png">⚡️</g-emoji> A JavaScript library for building performant and instant search experiences with Algolia.
        </span>
        <span itemprop="url"><a rel="nofollow" href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/">https://www.algolia.com/doc/guides/bu…</a></span>
  </div>
</div>

    <div class="repository-topics-container mt-2 mb-3 js-topics-list-container">  <div class="list-topics-container f6">
      <a class="topic-tag topic-tag-link " href="/topics/instantsearch" title="Topic: instantsearch" data-ga-click="Topic, repository page" data-octo-click="topic_click" data-octo-dimensions="topic:instantsearch">
  instantsearch
</a>

      <a class="topic-tag topic-tag-link " href="/topics/vanilla" title="Topic: vanilla" data-ga-click="Topic, repository page" data-octo-click="topic_click" data-octo-dimensions="topic:vanilla">
  vanilla
</a>

      <a class="topic-tag topic-tag-link " href="/topics/search" title="Topic: search" data-ga-click="Topic, repository page" data-octo-click="topic_click" data-octo-dimensions="topic:search">
  search
</a>

      <a class="topic-tag topic-tag-link " href="/topics/algolia" title="Topic: algolia" data-ga-click="Topic, repository page" data-octo-click="topic_click" data-octo-dimensions="topic:algolia">
  algolia
</a>

      <a class="topic-tag topic-tag-link " href="/topics/widgets" title="Topic: widgets" data-ga-click="Topic, repository page" data-octo-click="topic_click" data-octo-dimensions="topic:widgets">
  widgets
</a>

  </div>
</div>



  <div class="overall-summary overall-summary-bottomless">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/algolia/instantsearch.js/commits/develop">
            <svg class="octicon octicon-history" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"/></svg>
            <span class="num text-emphasized">
              3,734
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/algolia/instantsearch.js/branches">
          <svg class="octicon octicon-git-branch" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 00-1-3.72C.88 1 0 1.89 0 3a2 2 0 001 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
          <span class="num text-emphasized">
            66
          </span>
          branches
        </a>
      </li>

        <li>
          <a data-pjax href="/algolia/instantsearch.js/packages" data-ga-click="Repository, packages click, location:repo overview">
            <svg class="octicon octicon-package" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 00-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z"/></svg>
            <span class="num text-emphasized">
              0
            </span>
            packages
          </a>

        </li>

      <li>
        <a href="/algolia/instantsearch.js/releases">
          <svg class="octicon octicon-tag" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"/></svg>
          <span class="num text-emphasized">
            194
          </span>
          releases
        </a>
      </li>


        <li  data-contributors-hovercards-enabled >
            <a href="/algolia/instantsearch.js/graphs/contributors" data-hovercard-type="contributors" data-hovercard-url="/algolia/instantsearch.js/community_contributors/hovercard">
  <svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"/></svg>
    <span class="num text-emphasized">
      78
    </span>
    contributors
</a>
        </li>

        <li>
          <a href="/algolia/instantsearch.js/blob/develop/LICENSE">
            <svg class="octicon octicon-law" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"/></svg>
              MIT
          </a>
        </li>
    </ul>
  </div>

    <details class="details-reset">
      <summary title="Click for language details" data-ga-click="Repository, language bar stats toggle, location:repo overview">
        <div class="d-flex repository-lang-stats-graph">
            <span class="language-color" aria-label="JavaScript 64.1%" style="width:64.1%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
            <span class="language-color" aria-label="TypeScript 35.4%" style="width:35.4%; background-color:#2b7489;" itemprop="keywords">TypeScript</span>
            <span class="language-color" aria-label="Other 0.5%" style="width:0.5%; background-color:#ededed;" itemprop="keywords">Other</span>
        </div>
      </summary>
      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/algolia/instantsearch.js/search?l=javascript"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">64.1%</span>
              </a>
          </li>
          <li>
              <a href="/algolia/instantsearch.js/search?l=typescript"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#2b7489;"></span>
                <span class="lang">TypeScript</span>
                <span class="percent">35.4%</span>
              </a>
          </li>
          <li>
              <span>
                <span class="color-block language-color" style="background-color:#ededed;"></span>
                <span class="lang">Other</span>
                <span class="percent">0.5%</span>
              </span>
          </li>
        </ol>
      </div>
    </details>





    <div class="mt-2">
      <include-fragment src="/algolia/instantsearch.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>
    </div>

  <div class="file-navigation in-mid-page d-flex flex-items-start">
  
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>develop</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/algolia/instantsearch.js/refs/develop?source_action=disambiguate&amp;source_controller=files" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>


        <a class="btn btn-sm new-pull-request-btn" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;NEW_PULL_REQUEST_BUTTON&quot;,&quot;repository_id&quot;:39443258,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="ffdd19dacf4ec25873dd1b9d26494936f80d64325dc3eaaaf5318b75be5ac520" data-ga-click="Repository, new pull request, location:repo overview" data-pjax="true" href="/algolia/instantsearch.js/pull/new/develop">New pull request</a>

  <div class="breadcrumb flex-auto">
    
  </div>

  <div class="BtnGroup">
      
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="BtnGroup-parent" action="/algolia/instantsearch.js/new/develop" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="BbA0fdSl6n+JW9q1+6fZ+q175sT2krubZ57qfIs4gM3w9L//OvyJrF4ddCJM3XSNm5lq4wKpxLD4POlT6hqjbA==" />
    <button class="btn btn-sm BtnGroup-item" type="submit" data-disable-with="Creating file…">
      Create new file
    </button>
</form>

      
  <a href="/algolia/instantsearch.js/upload/develop" class="btn btn-sm BtnGroup-item">
    Upload files
  </a>


    <a class="btn btn-sm empty-icon float-right BtnGroup-item" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:39443258,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="92fd73bba6f7d2a19e515e500270e19ef791a138f34f9a2429d837ee91a43fc1" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="/algolia/instantsearch.js/find/develop">Find file</a>
  </div>

  


    

    <details class="get-repo-select-menu js-get-repo-select-menu  position-relative details-overlay details-reset">
  <summary class="btn btn-sm ml-2 btn-primary" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;repository_id&quot;:39443258,&quot;target&quot;:&quot;CLONE_OR_DOWNLOAD_BUTTON&quot;,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="54489394a2e389494c70015184496a5f09c5aa10eea9d681ba202d9b560d247e">
    Clone or download
    <span class="dropdown-caret"></span>
</summary>  <div class="position-relative">
    <div class="get-repo-modal dropdown-menu dropdown-menu-sw pb-0 js-toggler-container  js-get-repo-modal">

      <div class="get-repo-modal-options">
          <div class="clone-options https-clone-options">
              <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="uo7W+suHn3n47Ib2KzRVos70a50Z1EMUkK+fQotCiAj6cKcmApSheJKPcKZ7uoC52rk7pMJPVI6dnfEe51cHew==" /><button name="button" type="submit" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_SSH&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:39443258,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="61450e58073fb890f63d660798d8358e5eb193ac5df409305435db7e1508363b" class="btn-link btn-change-protocol js-toggler-target float-right">Use SSH</button></form>

            <h4 class="mb-1">
              Clone with HTTPS
              <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank" title="Which remote URL should I use?">
                <svg class="octicon octicon-question" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/></svg>
              </a>
            </h4>
            <p class="mb-2 get-repo-decription-text">
              Use Git or checkout with SVN using the web URL.
            </p>

            <div class="input-group">
  <input type="text" class="form-control input-monospace input-sm" data-autoselect value="https://github.com/algolia/instantsearch.js.git" aria-label="Clone this repository at https://github.com/algolia/instantsearch.js.git" readonly>
  <div class="input-group-button">
    <clipboard-copy value="https://github.com/algolia/instantsearch.js.git" aria-label="Copy to clipboard" class="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:39443258,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="49e247d7cd49c8ee02e32bbbf3e85551791ad4a40bf7d602b7e3bc5528861a58"><svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg></clipboard-copy>
  </div>
</div>

          </div>

          <div class="clone-options ssh-clone-options">
              <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" action="/users/set_protocol?protocol_selector=https&amp;protocol_type=clone" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="NTwYNAl/WWnk6VDloEIZZKuFikIRQVXGu9GrACZOl+x1wmnowGxnaI6KprXwzMx/v8jae8raQly248VcSlsYnw==" /><button name="button" type="submit" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_HTTPS&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:39443258,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="b4df1118d463149f382a08b1971ed4d97466b20d0e3aeaf3b766bc467bf0df28" class="btn-link btn-change-protocol js-toggler-target float-right">Use HTTPS</button></form>
              <h4 class="mb-1">
                Clone with SSH
                <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank" title="Which remote URL should I use?">
                  <svg class="octicon octicon-question" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/></svg>
                </a>
              </h4>


              <p class="mb-2 get-repo-decription-text">
                  Use a password protected SSH key.
              </p>

              <div class="input-group">
  <input type="text" class="form-control input-monospace input-sm" data-autoselect value="git@github.com:algolia/instantsearch.js.git" aria-label="Clone this repository at git@github.com:algolia/instantsearch.js.git" readonly>
  <div class="input-group-button">
    <clipboard-copy value="git@github.com:algolia/instantsearch.js.git" aria-label="Copy to clipboard" class="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:39443258,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="49e247d7cd49c8ee02e32bbbf3e85551791ad4a40bf7d602b7e3bc5528861a58"><svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg></clipboard-copy>
  </div>
</div>

          </div>
        <div class="mt-2">
          
<a class="btn btn-outline get-repo-btn  " rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;DOWNLOAD_ZIP&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:39443258,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}" data-hydro-click-hmac="69727d8089d06eeaa0d6ea65b62e0c25545a5ca956be4476a5b0e727fba6337f" data-ga-click="Repository, download zip, location:repo overview" href="/algolia/instantsearch.js/archive/develop.zip">Download ZIP</a>

        </div>
      </div>


      <div class="js-modal-download-mac py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching GitHub Desktop<span class="AnimatedEllipsis"></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://desktop.github.com/">download GitHub Desktop</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

      <div class="js-modal-download-windows py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching GitHub Desktop<span class="AnimatedEllipsis"></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://desktop.github.com/">download GitHub Desktop</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

      <div class="js-modal-download-xcode py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching Xcode<span class="AnimatedEllipsis"></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://developer.apple.com/xcode/">download Xcode</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

      <div class="js-modal-download-visual-studio py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching Visual Studio<span class="AnimatedEllipsis"></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://visualstudio.github.com/">download the GitHub extension for Visual Studio</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

    </div>
  </div>
</details>

</div>


  


  <div class="commit-tease js-details-container Details d-flex rounded-top-1" data-issue-and-pr-hovercards-enabled>
    
<div class="AvatarStack flex-self-start AvatarStack--two">
  <div class="AvatarStack-body" aria-label="renovate[bot] and francoischalifour (non-author committer)">
        <a class="avatar" data-skip-pjax="true" href="https://github.com/marketplace/renovate">
          <img height="20" width="20" alt="@renovate" src="https://avatars1.githubusercontent.com/in/2740?s=60&amp;v=4" />
</a>        <a class="avatar" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/users/francoischalifour/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/francoischalifour">
          <img height="20" width="20" alt="@francoischalifour" src="https://avatars2.githubusercontent.com/u/6137112?s=60&amp;v=4" />
</a>  </div>
</div>

    <div class="flex-auto f6 mr-3">
      
      <a href="/algolia/instantsearch.js/commits?author=renovate%5Bbot%5D"
     class="commit-author tooltipped tooltipped-s user-mention"
     aria-label="View all commits by renovate">renovate</a>


   and   <a href="/algolia/instantsearch.js/commits?author=francoischalifour"
     class="commit-author tooltipped tooltipped-s user-mention"
     aria-label="View all commits by francoischalifour">francoischalifour</a>

  


        <a data-pjax="true" title="chore(deps): update circleci/node:8.16.2 docker digest to d95f5… (#4272)" class="message text-inherit" href="/algolia/instantsearch.js/commit/694c82b9a2230b160f6f5a47bb7da355066cdf85">chore(deps): update circleci/node:8.16.2 docker digest to d95f5… (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="541237736" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4272" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4272/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4272">#4272</a><a data-pjax="true" title="chore(deps): update circleci/node:8.16.2 docker digest to d95f5… (#4272)" class="message text-inherit" href="/algolia/instantsearch.js/commit/694c82b9a2230b160f6f5a47bb7da355066cdf85">)</a>

    </div>
    <div class="no-wrap d-flex flex-self-start flex-items-baseline">
        <span class="mr-2 flex-self-center">
          <include-fragment accept="text/html; fragment" src="/algolia/instantsearch.js/commit/694c82b9a2230b160f6f5a47bb7da355066cdf85/rollup" class="d-inline"></include-fragment>
        </span>
      <span class="mr-1">Latest commit</span>
      <a class="commit-tease-sha mr-1" href="/algolia/instantsearch.js/commit/694c82b9a2230b160f6f5a47bb7da355066cdf85" data-pjax>
        694c82b
      </a>
      <span itemprop="dateModified"><relative-time datetime="2019-12-26T09:18:04Z" class="no-wrap">Dec 26, 2019</relative-time></span>
    </div>
  </div>



<div class="file-wrap">
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/algolia/instantsearch.js/tree/694c82b9a2230b160f6f5a47bb7da355066cdf85">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>
    <thead>
      <tr>
        <th><span class="sr-only">Type</span></th>
        <th><span class="sr-only">Name</span></th>
        <th><span class="sr-only">Latest commit message</span></th>
        <th><span class="sr-only">Commit time</span></th>
      </tr>
    </thead>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".circleci" id="df4a0e327b62c8cc393e4f285d1d86e4-70fa160a39cf82fc385e47ab25be7d7bccf832e6" href="/algolia/instantsearch.js/tree/develop/.circleci">.circleci</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore(deps): update circleci/node:8.16.2 docker digest to d95f5… (#4272)" class="link-gray" href="/algolia/instantsearch.js/commit/694c82b9a2230b160f6f5a47bb7da355066cdf85">chore(deps): update circleci/node:8.16.2 docker digest to d95f5… (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="541237736" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4272" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4272/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4272">#4272</a><a data-pjax="true" title="chore(deps): update circleci/node:8.16.2 docker digest to d95f5… (#4272)" class="link-gray" href="/algolia/instantsearch.js/commit/694c82b9a2230b160f6f5a47bb7da355066cdf85">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-26T09:18:04Z" class="no-wrap">Dec 26, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".github" id="01777e4a9846fea5f3fcc8fe40d44680-7d2ecbbb06f812b423a904363f86347353fbbfce" href="/algolia/instantsearch.js/tree/develop/.github">.github</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="docs(readme): add InstantSearch banner (#4226)" class="link-gray" href="/algolia/instantsearch.js/commit/4930cefbc75d76897e9d85a40b37f7b29ed8a162">docs(readme): add InstantSearch banner (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="530385801" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4226" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4226/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4226">#4226</a><a data-pjax="true" title="docs(readme): add InstantSearch banner (#4226)" class="link-gray" href="/algolia/instantsearch.js/commit/4930cefbc75d76897e9d85a40b37f7b29ed8a162">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-11-29T15:17:20Z" class="no-wrap">Nov 29, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".storybook" id="ba63f83139808eb8660b68de3d320d57-93b8bf56c730ac19d24b96466217b11d7ebb47e8" href="/algolia/instantsearch.js/tree/develop/.storybook">.storybook</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore(storybook): fix css format (#4251)

forgotten hash here in the rgb" class="link-gray" href="/algolia/instantsearch.js/commit/9c25fbd77a5a7ee70857695ea2fd159470a9c5f1">chore(storybook): fix css format (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="535748862" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4251" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4251/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4251">#4251</a><a data-pjax="true" title="chore(storybook): fix css format (#4251)

forgotten hash here in the rgb" class="link-gray" href="/algolia/instantsearch.js/commit/9c25fbd77a5a7ee70857695ea2fd159470a9c5f1">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-10T14:33:19Z" class="no-wrap">Dec 10, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="examples" id="bfebe34154a0dfd9fc7b447fc9ed74e9-752c9e536f4193a516fadda8f4b45c5fb7dca610" href="/algolia/instantsearch.js/tree/develop/examples">examples</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore(examples): make hero image jpg (#4270)

JPG is a more fitting image format for pictures, since it compresses better. Instead of 700 &amp; 790 kB, it's now 80 &amp; 50 kB

This change has already happened on Vue, but not yet React &amp; Angular" class="link-gray" href="/algolia/instantsearch.js/commit/f04dbe7e4f639406d537f0a7d83dd7a5bece4f7c">chore(examples): make hero image jpg (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="540932840" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4270" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4270/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4270">#4270</a><a data-pjax="true" title="chore(examples): make hero image jpg (#4270)

JPG is a more fitting image format for pictures, since it compresses better. Instead of 700 &amp; 790 kB, it's now 80 &amp; 50 kB

This change has already happened on Vue, but not yet React &amp; Angular" class="link-gray" href="/algolia/instantsearch.js/commit/f04dbe7e4f639406d537f0a7d83dd7a5bece4f7c">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-20T11:09:39Z" class="no-wrap">Dec 20, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="scripts" id="d6c5855a62cf32a4dadbc2831f0f295f-f79208eadff200b0a21c591274cb017d457705a3" href="/algolia/instantsearch.js/tree/develop/scripts">scripts</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="feat(typescript): add declaration files (experimental) (#4220)" class="link-gray" href="/algolia/instantsearch.js/commit/ebacfe55bc0fddf9ca217eca8c8a207b220ab93d">feat(typescript): add declaration files (experimental) (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="528257699" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4220" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4220/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4220">#4220</a><a data-pjax="true" title="feat(typescript): add declaration files (experimental) (#4220)" class="link-gray" href="/algolia/instantsearch.js/commit/ebacfe55bc0fddf9ca217eca8c8a207b220ab93d">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-10T09:13:02Z" class="no-wrap">Dec 10, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="src" id="25d902c24283ab8cfbac54dfa101ad31-4b44dcae7f8e1e5ccd26c76bc6e885752bde1e75" href="/algolia/instantsearch.js/tree/develop/src">src</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="v4.1.1

### Bug Fixes

* **configureRelatedItems:** use `facetFilters` to exclude `obje… ([#4264](https://github.com/algolia/instantsearch.js/issues/4264)) ([9bc66cf](https://github.com/algolia/instantsearch.js/commit/9bc66cfb8b13a44840c687a1631696c85e45845f))
* **index:** fix warning for widgets sharing connectors ([#4260](https://github.com/algolia/instantsearch.js/issues/4260)) ([ec97b4a](https://github.com/algolia/instantsearch.js/commit/ec97b4a07e5d1f9a967f5ee5925ebd3b447e1b02))
* **insights:** export Insights helper in the ESM build ([#4261](https://github.com/algolia/instantsearch.js/issues/4261)) ([20649af](https://github.com/algolia/instantsearch.js/commit/20649aff54a3150050866038cd3718d6010c353b))
* **insights:** move &#39;insightsClient not provided error&#39; to wrapper level ([#4254](https://github.com/algolia/instantsearch.js/issues/4254)) ([15d38dd](https://github.com/algolia/instantsearch.js/commit/15d38ddb87fbd6323f350d42f791c4d7a1505eeb))

### Features

* **insights:** add hogan helper ([#4253](https://github.com/algolia/instantsearch.js/issues/4253)) ([85739d7](https://github.com/algolia/instantsearch.js/commit/85739d782ae1fad3b87612e4a410eada0ca4fe54))" class="link-gray" href="/algolia/instantsearch.js/commit/385ab744f6ff8f870a26bf4c1f0ff5bce01eeec7">v4.1.1</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-20T10:18:20Z" class="no-wrap">Dec 20, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="stories" id="5e0bfe3e3e1cf5f82a532eb269d93342-e5931fe4d47eeb5ad2b9c54404b4ab209e52dfe8" href="/algolia/instantsearch.js/tree/develop/stories">stories</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="refactor(panel): migrate Panel widget stack to TypeScript (#4268)" class="link-gray" href="/algolia/instantsearch.js/commit/a59e8359f4362e66cce1b352d1c4eeeccc9622c8">refactor(panel): migrate Panel widget stack to TypeScript (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="539636214" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4268" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4268/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4268">#4268</a><a data-pjax="true" title="refactor(panel): migrate Panel widget stack to TypeScript (#4268)" class="link-gray" href="/algolia/instantsearch.js/commit/a59e8359f4362e66cce1b352d1c4eeeccc9622c8">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-18T17:07:26Z" class="no-wrap">Dec 18, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="test" id="098f6bcd4621d373cade4e832627b4f6-c530afe4175b636df606fe9ef3b0d6de7ac44c7f" href="/algolia/instantsearch.js/tree/develop/test">test</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="feat(router): plug router as a middleware (#4224)" class="link-gray" href="/algolia/instantsearch.js/commit/9d1f7be9df304a4bc2d07dbd253a73580a0593c3">feat(router): plug router as a middleware (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="529948415" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4224" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4224/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4224">#4224</a><a data-pjax="true" title="feat(router): plug router as a middleware (#4224)" class="link-gray" href="/algolia/instantsearch.js/commit/9d1f7be9df304a4bc2d07dbd253a73580a0593c3">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-02T12:58:15Z" class="no-wrap">Dec 2, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="website" id="d1befa03c79ca0b84ecc488dea96bc68-92ff869dd6e46b854c19a3f20f837222238e946e" href="/algolia/instantsearch.js/tree/develop/website">website</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore(examples): add routing to e-commerce demo (#3921)

* chore(examples): add routing to e-commerce demo

* chore(examples): add redirection to avoid 404 page

* chore(examples): add base URL" class="link-gray" href="/algolia/instantsearch.js/commit/9e49f32d7543c83196f644c5a1e157b7253050b7">chore(examples): add routing to e-commerce demo (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="463835197" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/3921" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/3921/hovercard" href="https://github.com/algolia/instantsearch.js/pull/3921">#3921</a><a data-pjax="true" title="chore(examples): add routing to e-commerce demo (#3921)

* chore(examples): add routing to e-commerce demo

* chore(examples): add redirection to avoid 404 page

* chore(examples): add base URL" class="link-gray" href="/algolia/instantsearch.js/commit/9e49f32d7543c83196f644c5a1e157b7253050b7">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-07-11T08:26:50Z" class="no-wrap">Jul 11, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".editorconfig" id="1e70daafb475c0ce3fef7d2728279182-dd7255e8a44b71c26d3de7e172f1878795a2f236" href="/algolia/instantsearch.js/blob/develop/.editorconfig">.editorconfig</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore(formatting): add .editorconfig (#2435)

fixes #2429" class="link-gray" href="/algolia/instantsearch.js/commit/ee2a3fddaa228e27a520b60eadac4138a822d819">chore(formatting): add .editorconfig (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="262371238" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/2435" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/2435/hovercard" href="https://github.com/algolia/instantsearch.js/pull/2435">#2435</a><a data-pjax="true" title="chore(formatting): add .editorconfig (#2435)

fixes #2429" class="link-gray" href="/algolia/instantsearch.js/commit/ee2a3fddaa228e27a520b60eadac4138a822d819">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2017-10-03T10:06:02Z" class="no-wrap">Oct 3, 2017</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".eslintignore" id="1b0fd5322de42e11c8786543f74c7c41-a14fa8569f0d8535ebdbcd53fa1f1328ec8b1522" href="/algolia/instantsearch.js/blob/develop/.eslintignore">.eslintignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore(examples): update e-commerce demo (#3856)

* chore(examples): build examples before serving (#3798)

* chore(examples): add e-commerce widgets [part 1] (#3799)

* chore(examples): add e-commerce layout styles [part 2] (#3800)

* chore(examples): add e-commerce theme [part 3] (#3801)

* chore(examples): add e-commerce widgets demo styles [part 4] (#3802)

* chore(examples): update e-commerce design [part 5] (#3843)" class="link-gray" href="/algolia/instantsearch.js/commit/2bf0d8e5dd9a2017c753a27360059140bd903fc2">chore(examples): update e-commerce demo (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="455804494" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/3856" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/3856/hovercard" href="https://github.com/algolia/instantsearch.js/pull/3856">#3856</a><a data-pjax="true" title="chore(examples): update e-commerce demo (#3856)

* chore(examples): build examples before serving (#3798)

* chore(examples): add e-commerce widgets [part 1] (#3799)

* chore(examples): add e-commerce layout styles [part 2] (#3800)

* chore(examples): add e-commerce theme [part 3] (#3801)

* chore(examples): add e-commerce widgets demo styles [part 4] (#3802)

* chore(examples): update e-commerce design [part 5] (#3843)" class="link-gray" href="/algolia/instantsearch.js/commit/2bf0d8e5dd9a2017c753a27360059140bd903fc2">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-06-14T10:09:15Z" class="no-wrap">Jun 14, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".eslintrc.js" id="e4403a877d80de653400d88d85e4801a-dc3ee6dbe2fbd23ae22c670c171fd3581b76244e" href="/algolia/instantsearch.js/blob/develop/.eslintrc.js">.eslintrc.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="feat(widgets): introduce `configureRelatedItems` as experimental (#4233)

This introduces a new set of experimental widgets:

- `EXPERIMENTAL_configureRelatedItems`
- `EXPERIMENTAL_connectConfigureRelatedItems`" class="link-gray" href="/algolia/instantsearch.js/commit/f811f4efa3e58a2b868d11ec338248715a7596c9">feat(widgets): introduce `configureRelatedItems` as experimental (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="531199590" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4233" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4233/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4233">#4233</a><a data-pjax="true" title="feat(widgets): introduce `configureRelatedItems` as experimental (#4233)

This introduces a new set of experimental widgets:

- `EXPERIMENTAL_configureRelatedItems`
- `EXPERIMENTAL_connectConfigureRelatedItems`" class="link-gray" href="/algolia/instantsearch.js/commit/f811f4efa3e58a2b868d11ec338248715a7596c9">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-10T09:24:49Z" class="no-wrap">Dec 10, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".gitignore" id="a084b794bc0759e7a6b77810e01874f2-3b6fd24ccf29b49816f6bb176998cfb47d71cf0a" href="/algolia/instantsearch.js/blob/develop/.gitignore">.gitignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="feat(router): plug router as a middleware (#4224)" class="link-gray" href="/algolia/instantsearch.js/commit/9d1f7be9df304a4bc2d07dbd253a73580a0593c3">feat(router): plug router as a middleware (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="529948415" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4224" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4224/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4224">#4224</a><a data-pjax="true" title="feat(router): plug router as a middleware (#4224)" class="link-gray" href="/algolia/instantsearch.js/commit/9d1f7be9df304a4bc2d07dbd253a73580a0593c3">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-02T12:58:15Z" class="no-wrap">Dec 2, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".nvmrc" id="ae9eba3500703eaba1d5b8e13832d955-89bf9cb0e4a6b452e5b38c36fdc28c84c9a99c84" href="/algolia/instantsearch.js/blob/develop/.nvmrc">.nvmrc</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore(deps): update node.js (#4181)" class="link-gray" href="/algolia/instantsearch.js/commit/9db469bf60a6136f434a9a2acd7c261596eafc84">chore(deps): update node.js (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="516676562" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4181" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4181/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4181">#4181</a><a data-pjax="true" title="chore(deps): update node.js (#4181)" class="link-gray" href="/algolia/instantsearch.js/commit/9db469bf60a6136f434a9a2acd7c261596eafc84">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-11-26T17:27:10Z" class="no-wrap">Nov 26, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".prettierrc" id="f2e285fb35cc9694564cb6d2af099ad2-833f03b62148b55ee3789d6c1a9b398fbe944928" href="/algolia/instantsearch.js/blob/develop/.prettierrc">.prettierrc</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore: add .prettierrc (#3131)" class="link-gray" href="/algolia/instantsearch.js/commit/ef731cc48c7640aac71e09db799b476ef2474f3b">chore: add .prettierrc (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="361812543" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/3131" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/3131/hovercard" href="https://github.com/algolia/instantsearch.js/pull/3131">#3131</a><a data-pjax="true" title="chore: add .prettierrc (#3131)" class="link-gray" href="/algolia/instantsearch.js/commit/ef731cc48c7640aac71e09db799b476ef2474f3b">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2018-09-20T14:35:16Z" class="no-wrap">Sep 20, 2018</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".yarnrc" id="a3e03be55c12fe638fe1e1c5aa684b9a-fdd705c635f822c2514485dd182b2371461952b3" href="/algolia/instantsearch.js/blob/develop/.yarnrc">.yarnrc</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="fix(yarnrc): use empty string for save-prefix (#2739)

* fix(yarnrc): use empty string for save-prefix
* fix: enzyme-adapter version" class="link-gray" href="/algolia/instantsearch.js/commit/979e0cdf781a60eac0836af6d67c4a72569bab26">fix(yarnrc): use empty string for save-prefix (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="297463018" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/2739" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/2739/hovercard" href="https://github.com/algolia/instantsearch.js/pull/2739">#2739</a><a data-pjax="true" title="fix(yarnrc): use empty string for save-prefix (#2739)

* fix(yarnrc): use empty string for save-prefix
* fix: enzyme-adapter version" class="link-gray" href="/algolia/instantsearch.js/commit/979e0cdf781a60eac0836af6d67c4a72569bab26">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2018-02-15T14:32:04Z" class="no-wrap">Feb 15, 2018</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="CHANGELOG.md" id="4ac32a78649ca5bdd8e0ba38b7006a1e-716399bdadb70e824b1f5d6e7e25973fd440a188" href="/algolia/instantsearch.js/blob/develop/CHANGELOG.md">CHANGELOG.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="v4.1.1

### Bug Fixes

* **configureRelatedItems:** use `facetFilters` to exclude `obje… ([#4264](https://github.com/algolia/instantsearch.js/issues/4264)) ([9bc66cf](https://github.com/algolia/instantsearch.js/commit/9bc66cfb8b13a44840c687a1631696c85e45845f))
* **index:** fix warning for widgets sharing connectors ([#4260](https://github.com/algolia/instantsearch.js/issues/4260)) ([ec97b4a](https://github.com/algolia/instantsearch.js/commit/ec97b4a07e5d1f9a967f5ee5925ebd3b447e1b02))
* **insights:** export Insights helper in the ESM build ([#4261](https://github.com/algolia/instantsearch.js/issues/4261)) ([20649af](https://github.com/algolia/instantsearch.js/commit/20649aff54a3150050866038cd3718d6010c353b))
* **insights:** move &#39;insightsClient not provided error&#39; to wrapper level ([#4254](https://github.com/algolia/instantsearch.js/issues/4254)) ([15d38dd](https://github.com/algolia/instantsearch.js/commit/15d38ddb87fbd6323f350d42f791c4d7a1505eeb))

### Features

* **insights:** add hogan helper ([#4253](https://github.com/algolia/instantsearch.js/issues/4253)) ([85739d7](https://github.com/algolia/instantsearch.js/commit/85739d782ae1fad3b87612e4a410eada0ca4fe54))" class="link-gray" href="/algolia/instantsearch.js/commit/385ab744f6ff8f870a26bf4c1f0ff5bce01eeec7">v4.1.1</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-20T10:18:20Z" class="no-wrap">Dec 20, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="CONTRIBUTING.md" id="6a3371457528722a734f3c51d9238c13-85cfb857ae2de5815f3455f1f9fa3bd2128607d0" href="/algolia/instantsearch.js/blob/develop/CONTRIBUTING.md">CONTRIBUTING.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="v4.1.0

The 4.0.1 release contained experimental TypeScript definitions in the ESM build by accident. We rolled this back in 4.1.0 because types will first be released on an experimental tag: `experimental-typescript`.

### Bug Fixes

* **core:** display correct object types in messages ([#4249](https://github.com/algolia/instantsearch.js/issues/4249)) ([fb2c3c9](https://github.com/algolia/instantsearch.js/commit/fb2c3c9c37fd8d28cd4712486c5c637e237fe83b))
* **insights:** detect clicks on children of `[data-insights]` HTML elements ([#4197](https://github.com/algolia/instantsearch.js/issues/4197)) ([9cac5a3](https://github.com/algolia/instantsearch.js/commit/9cac5a3aa4af616ec7913c17ed7388134c5e7f0a))
* **insights:** display docs URL when missing ([#4231](https://github.com/algolia/instantsearch.js/issues/4231)) ([9df1e7f](https://github.com/algolia/instantsearch.js/commit/9df1e7f762333bd31b5840b35378d56605fe4844))
* **widgets:** override connectors&#39; `$$type` ([#4227](https://github.com/algolia/instantsearch.js/issues/4227)) ([50f4af3](https://github.com/algolia/instantsearch.js/commit/50f4af3006a44cd08dd99b3a72bd410340c2e48a))

### Features

* **middleware:** introduce `EXPERIMENTAL_use` to plug middleware into InstantSearch ([#4224](https://github.com/algolia/instantsearch.js/issues/4224)) ([9d1f7be](https://github.com/algolia/instantsearch.js/commit/9d1f7be9df304a4bc2d07dbd253a73580a0593c3))
* **router:** plug router as a middleware ([#4224](https://github.com/algolia/instantsearch.js/issues/4224)) ([9d1f7be](https://github.com/algolia/instantsearch.js/commit/9d1f7be9df304a4bc2d07dbd253a73580a0593c3))
* **insights:** detect window.aa when available on global scope and a function ([#4191](https://github.com/algolia/instantsearch.js/issues/4191)) ([d6df5af](https://github.com/algolia/instantsearch.js/commit/d6df5affc4111aaf2c82f847ffe877793faac86c))
* **typescript:** add declaration files (experimental) ([#4220](https://github.com/algolia/instantsearch.js/issues/4220)) ([ebacfe5](https://github.com/algolia/instantsearch.js/commit/ebacfe55bc0fddf9ca217eca8c8a207b220ab93d))
* **widgets:** introduce Related Items widgets as experimental (`EXPERIMENTAL_configureRelatedItems` and `EXPERIMENTAL_connectConfigureRelatedItems`) ([#4233](https://github.com/algolia/instantsearch.js/issues/4233)) ([f811f4e](https://github.com/algolia/instantsearch.js/commit/f811f4efa3e58a2b868d11ec338248715a7596c9))
# Please enter the commit message for your changes. Lines starting
# with &#39;#&#39; will be kept; you may remove them yourself if you want to.
# An empty message aborts the commit.
#
# Date:      Tue Dec 10 10:36:24 2019 +0100
#
# On branch master
# Your branch is ahead of &#39;origin/master&#39; by 23 commits.
#   (use &quot;git push&quot; to publish your local commits)
#
# Changes to be committed:
#	modified:   CHANGELOG.md
#	modified:   CONTRIBUTING.md
#	modified:   package.json
#	modified:   src/lib/version.ts
#

# Please enter the commit message for your changes. Lines starting
# with &#39;#&#39; will be kept; you may remove them yourself if you want to.
# An empty message aborts the commit.
#
# Date:      Tue Dec 10 10:36:24 2019 +0100
#
# On branch master
# Your branch is ahead of &#39;origin/master&#39; by 23 commits.
#   (use &quot;git push&quot; to publish your local commits)
#
# Changes to be committed:
#	modified:   CHANGELOG.md
#	modified:   CONTRIBUTING.md
#	modified:   package.json
#	modified:   src/lib/version.ts
#" class="link-gray" href="/algolia/instantsearch.js/commit/556347e0c76c15a7066f19acad817563b40e518a">v4.1.0</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-10T09:53:06Z" class="no-wrap">Dec 10, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="LICENSE" id="9879d6db96fd29134fc802214163b95a-78f811663b829b603f9abd9473a07a38b00d016f" itemprop="license" href="/algolia/instantsearch.js/blob/develop/LICENSE">LICENSE</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="docs(react-instantsearch): remove mentions of ris (#2094)

Since we moved react-instantsearch to
https://github.com/algolia/react-instantsearch/ and
https://community.algolia.com/react-instantsearch/

We can now remove mentions of the old repo organisation along with old
release scripts and specifics" class="link-gray" href="/algolia/instantsearch.js/commit/0a76913f15bb9c4974aea267508e6f4b6a734d77">docs(react-instantsearch): remove mentions of ris (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="219309976" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/2094" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/2094/hovercard" href="https://github.com/algolia/instantsearch.js/pull/2094">#2094</a><a data-pjax="true" title="docs(react-instantsearch): remove mentions of ris (#2094)

Since we moved react-instantsearch to
https://github.com/algolia/react-instantsearch/ and
https://community.algolia.com/react-instantsearch/

We can now remove mentions of the old repo organisation along with old
release scripts and specifics" class="link-gray" href="/algolia/instantsearch.js/commit/0a76913f15bb9c4974aea267508e6f4b6a734d77">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2017-04-04T16:59:26Z" class="no-wrap">Apr 4, 2017</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="README.md" id="04c6e90faac2675aa89e2176d2eec7d8-f69983de972a4a95f1ed85d03c7801f931966cb9" href="/algolia/instantsearch.js/blob/develop/README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="docs(readme): add InstantSearch banner (#4226)" class="link-gray" href="/algolia/instantsearch.js/commit/4930cefbc75d76897e9d85a40b37f7b29ed8a162">docs(readme): add InstantSearch banner (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="530385801" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4226" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4226/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4226">#4226</a><a data-pjax="true" title="docs(readme): add InstantSearch banner (#4226)" class="link-gray" href="/algolia/instantsearch.js/commit/4930cefbc75d76897e9d85a40b37f7b29ed8a162">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-11-29T15:17:20Z" class="no-wrap">Nov 29, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="babel.config.js" id="fc10a6682269c1fefc2abe05d1500b8a-4edd769ae3a0a0d5bddbc3059e2324e0b62058a3" href="/algolia/instantsearch.js/blob/develop/babel.config.js">babel.config.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="refactor: migrate to Preact X (#4156)" class="link-gray" href="/algolia/instantsearch.js/commit/06eaac69204890f3c82d41ab9c5f9111ce42c21e">refactor: migrate to Preact X (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="502662133" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4156" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4156/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4156">#4156</a><a data-pjax="true" title="refactor: migrate to Preact X (#4156)" class="link-gray" href="/algolia/instantsearch.js/commit/06eaac69204890f3c82d41ab9c5f9111ce42c21e">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-10-23T09:15:04Z" class="no-wrap">Oct 23, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="global.d.ts" id="db0786508d94338729cb29f68ebd34cf-4dfa33d81ddc12837015d7e40d0f35d8bb844800" href="/algolia/instantsearch.js/blob/develop/global.d.ts">global.d.ts</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="refactor(RoutingManager): migrate tests to TypeScript (#3762)" class="link-gray" href="/algolia/instantsearch.js/commit/65911504b9ae0e2596c75f0ae74133985dc79850">refactor(RoutingManager): migrate tests to TypeScript (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="441208944" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/3762" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/3762/hovercard" href="https://github.com/algolia/instantsearch.js/pull/3762">#3762</a><a data-pjax="true" title="refactor(RoutingManager): migrate tests to TypeScript (#3762)" class="link-gray" href="/algolia/instantsearch.js/commit/65911504b9ae0e2596c75f0ae74133985dc79850">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-05-14T11:38:02Z" class="no-wrap">May 14, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="jest.config.js" id="2d0cd5d10b9604941c38c6aac608178a-1871e21cf22170708bc796985093c8dffb0303ef" href="/algolia/instantsearch.js/blob/develop/jest.config.js">jest.config.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="feat(transformers): add tests (#4153)

* feat(transformers): add CLI

This CLI is mostly copied from react-codemod, which is BSD licensed, so I need to look at where to put the license text.

Since the CLI has dependencies, which I just added in teh dependencies field, it might make sense to have a separate repo. I like the fact that you can run it from the dependencies directly though, so to consider.

While testing this out I found a few more changes, which were applied in the next commit.

* chore: additional changes found by fix in script

* Update addWidget-to-addWidgets.test.js

* Update scripts/transforms/README.md

* chore: add license

* chore: move dependency

* chore: add to package.json

* chore: replace chalk with inline

* fix typo

* Update scripts/transforms/README.md

Co-Authored-By: François Chalifour &lt;francoischalifour@users.noreply.github.com&gt;

* move file structure less complex

* Update scripts/transforms/README.md

* remove CLI

* chore: ordering

* docs: wording of call" class="link-gray" href="/algolia/instantsearch.js/commit/5a28415c39bf5a3a65c61d8f0d444ea6f4e0e17a">feat(transformers): add tests (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="500735322" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4153" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4153/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4153">#4153</a><a data-pjax="true" title="feat(transformers): add tests (#4153)

* feat(transformers): add CLI

This CLI is mostly copied from react-codemod, which is BSD licensed, so I need to look at where to put the license text.

Since the CLI has dependencies, which I just added in teh dependencies field, it might make sense to have a separate repo. I like the fact that you can run it from the dependencies directly though, so to consider.

While testing this out I found a few more changes, which were applied in the next commit.

* chore: additional changes found by fix in script

* Update addWidget-to-addWidgets.test.js

* Update scripts/transforms/README.md

* chore: add license

* chore: move dependency

* chore: add to package.json

* chore: replace chalk with inline

* fix typo

* Update scripts/transforms/README.md

Co-Authored-By: François Chalifour &lt;francoischalifour@users.noreply.github.com&gt;

* move file structure less complex

* Update scripts/transforms/README.md

* remove CLI

* chore: ordering

* docs: wording of call" class="link-gray" href="/algolia/instantsearch.js/commit/5a28415c39bf5a3a65c61d8f0d444ea6f4e0e17a">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-11-26T17:29:10Z" class="no-wrap">Nov 26, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="netlify.toml" id="5db06fd2327543bbb72119cd1e5761cf-967bdde960350596e17e933d60c53b3ccdba4ba6" href="/algolia/instantsearch.js/blob/develop/netlify.toml">netlify.toml</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="test: add End-2-End test suite (#4035)" class="link-gray" href="/algolia/instantsearch.js/commit/17c70e9520349e9a2f5985dbe1320b14dd6109ef">test: add End-2-End test suite (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="479703631" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4035" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4035/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4035">#4035</a><a data-pjax="true" title="test: add End-2-End test suite (#4035)" class="link-gray" href="/algolia/instantsearch.js/commit/17c70e9520349e9a2f5985dbe1320b14dd6109ef">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-09-06T14:27:14Z" class="no-wrap">Sep 6, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="package.json" id="b9cfc7f2cdf78a7f4b91a753d10865a2-be2207bbcec7bf8b9639324ae95f9538e933a09b" href="/algolia/instantsearch.js/blob/develop/package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore(deps): update babel monorepo to v7.7.7 (#4273)" class="link-gray" href="/algolia/instantsearch.js/commit/c860b3d181418fa4586577e684b58e87f92d9d78">chore(deps): update babel monorepo to v7.7.7 (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="541251395" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4273" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4273/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4273">#4273</a><a data-pjax="true" title="chore(deps): update babel monorepo to v7.7.7 (#4273)" class="link-gray" href="/algolia/instantsearch.js/commit/c860b3d181418fa4586577e684b58e87f92d9d78">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-26T09:17:55Z" class="no-wrap">Dec 26, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="renovate.json" id="76e62915fba4048ac877a875e2e3b8d2-0357de8a815af5e987f4735c9918e2ac71fa4a67" href="/algolia/instantsearch.js/blob/develop/renovate.json">renovate.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore: update Renovate to update the examples (#3869)" class="link-gray" href="/algolia/instantsearch.js/commit/81d2a5265167d89be4b80199e9a9b572451efef1">chore: update Renovate to update the examples (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="458709651" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/3869" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/3869/hovercard" href="https://github.com/algolia/instantsearch.js/pull/3869">#3869</a><a data-pjax="true" title="chore: update Renovate to update the examples (#3869)" class="link-gray" href="/algolia/instantsearch.js/commit/81d2a5265167d89be4b80199e9a9b572451efef1">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-06-20T16:50:21Z" class="no-wrap">Jun 20, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="tsconfig.checkjs.json" id="3a0cf311d638bdbb20b915d0fa2ed39a-690c9da10ec75136bdcbd3310069507815f3ff1b" href="/algolia/instantsearch.js/blob/develop/tsconfig.checkjs.json">tsconfig.checkjs.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore(typescript): add type-check:js command (#4250)" class="link-gray" href="/algolia/instantsearch.js/commit/ca4fb7b9117f0dad51fbb42e0a2622c7be85aed3">chore(typescript): add type-check:js command (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="535715401" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4250" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4250/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4250">#4250</a><a data-pjax="true" title="chore(typescript): add type-check:js command (#4250)" class="link-gray" href="/algolia/instantsearch.js/commit/ca4fb7b9117f0dad51fbb42e0a2622c7be85aed3">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-10T15:08:25Z" class="no-wrap">Dec 10, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="tsconfig.declaration.json" id="ff9c986c9e50b61c69e53184a99aea42-1488b0495a39a70528c6ba5820a13709af97f1f2" href="/algolia/instantsearch.js/blob/develop/tsconfig.declaration.json">tsconfig.declaration.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="feat(typescript): add declaration files (experimental) (#4220)" class="link-gray" href="/algolia/instantsearch.js/commit/ebacfe55bc0fddf9ca217eca8c8a207b220ab93d">feat(typescript): add declaration files (experimental) (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="528257699" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4220" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4220/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4220">#4220</a><a data-pjax="true" title="feat(typescript): add declaration files (experimental) (#4220)" class="link-gray" href="/algolia/instantsearch.js/commit/ebacfe55bc0fddf9ca217eca8c8a207b220ab93d">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-10T09:13:02Z" class="no-wrap">Dec 10, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="tsconfig.json" id="e5e546dd2eb0351f813d63d1b39dbc48-a5793149b0cb67b8988277718a2049bda2c0990b" href="/algolia/instantsearch.js/blob/develop/tsconfig.json">tsconfig.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="refactor: migrate to Preact X (#4156)" class="link-gray" href="/algolia/instantsearch.js/commit/06eaac69204890f3c82d41ab9c5f9111ce42c21e">refactor: migrate to Preact X (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="502662133" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4156" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4156/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4156">#4156</a><a data-pjax="true" title="refactor: migrate to Preact X (#4156)" class="link-gray" href="/algolia/instantsearch.js/commit/06eaac69204890f3c82d41ab9c5f9111ce42c21e">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-10-23T09:15:04Z" class="no-wrap">Oct 23, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="wdio.local.conf.js" id="f7d6eed3a3cacc1872c3ad52687fc72a-6b8d262c9c2a1bb8ce2a7f7841b62cb5347ded13" href="/algolia/instantsearch.js/blob/develop/wdio.local.conf.js">wdio.local.conf.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="test: add End-2-End test suite (#4035)" class="link-gray" href="/algolia/instantsearch.js/commit/17c70e9520349e9a2f5985dbe1320b14dd6109ef">test: add End-2-End test suite (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="479703631" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4035" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4035/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4035">#4035</a><a data-pjax="true" title="test: add End-2-End test suite (#4035)" class="link-gray" href="/algolia/instantsearch.js/commit/17c70e9520349e9a2f5985dbe1320b14dd6109ef">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-09-06T14:27:14Z" class="no-wrap">Sep 6, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="wdio.saucelabs.conf.js" id="35ac09fb5fec7df1a979b27342fc7c29-52f6f759da70c7b75b3b4b33d6b946a1ee078ffa" href="/algolia/instantsearch.js/blob/develop/wdio.saucelabs.conf.js">wdio.saucelabs.conf.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="test: add End-2-End test suite (#4035)" class="link-gray" href="/algolia/instantsearch.js/commit/17c70e9520349e9a2f5985dbe1320b14dd6109ef">test: add End-2-End test suite (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="479703631" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4035" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4035/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4035">#4035</a><a data-pjax="true" title="test: add End-2-End test suite (#4035)" class="link-gray" href="/algolia/instantsearch.js/commit/17c70e9520349e9a2f5985dbe1320b14dd6109ef">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-09-06T14:27:14Z" class="no-wrap">Sep 6, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="yarn.lock" id="8ee2343978836a779dc9f8d6b794c3b2-abb85cd6453ddd3bafbe8951b38a8adeccf6cd29" href="/algolia/instantsearch.js/blob/develop/yarn.lock">yarn.lock</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="chore(deps): update babel monorepo to v7.7.7 (#4273)" class="link-gray" href="/algolia/instantsearch.js/commit/c860b3d181418fa4586577e684b58e87f92d9d78">chore(deps): update babel monorepo to v7.7.7 (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="541251395" data-permission-text="Issue title is private" data-url="https://github.com/algolia/instantsearch.js/issues/4273" data-hovercard-type="pull_request" data-hovercard-url="/algolia/instantsearch.js/pull/4273/hovercard" href="https://github.com/algolia/instantsearch.js/pull/4273">#4273</a><a data-pjax="true" title="chore(deps): update babel monorepo to v7.7.7 (#4273)" class="link-gray" href="/algolia/instantsearch.js/commit/c860b3d181418fa4586577e684b58e87f92d9d78">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-12-26T09:17:55Z" class="no-wrap">Dec 26, 2019</time-ago></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>




  <div id="readme" class="Box Box--condensed md js-code-block-container">
    <div class="Box-header d-flex flex-items-center flex-justify-between px-2">
      <h3 class="Box-title pr-3">
        <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
        README.md
      </h3>
    </div>
        <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/algolia/instantsearch.js/find-symbols"
     data-tagsearch-ref="develop"
     data-tagsearch-path="README.md"
     data-tagsearch-lang="Markdown"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:39443258,&quot;ref&quot;:&quot;develop&quot;,&quot;language&quot;:&quot;Markdown&quot;,&quot;client_id&quot;:&quot;211676224.1570756226&quot;,&quot;originating_request_id&quot;:&quot;BFA4:6D2B:542E128:93E025C:5E0C46A9&quot;,&quot;originating_url&quot;:&quot;https://github.com/algolia/instantsearch.js&quot;,&quot;referrer&quot;:&quot;https://cdn.jsdelivr.net/npm/instantsearch.js&quot;,&quot;user_id&quot;:44134283}}"
     data-hydro-click-hmac="d24b44575d1713533ccad25d2b0ddf42866b1889bbec0a0050ec4d81826101f7">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>

      <div class="Box-body">
        <article class="markdown-body entry-content p-5" itemprop="text"><p align="center">
  <a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/" rel="nofollow">
    <img alt="InstantSearch.js" src="/algolia/instantsearch.js/raw/develop/.github/banner.png" style="max-width:100%;">
  </a>
  </p><p align="center">
    InstantSearch.js is a JavaScript library for building performant and instant search experiences with <a href="https://www.algolia.com/?utm_source=instantsearch.js&amp;utm_campaign=repository" rel="nofollow">Algolia</a>.
  </p>
<p></p>
<hr>
<p><a href="https://npmjs.org/package/instantsearch.js" rel="nofollow"><img src="https://camo.githubusercontent.com/f897f6a216e929f92e7739cb97138895ec2b6dd2/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f696e7374616e747365617263682e6a732e7376673f7374796c653d666c61742d737175617265" alt="Version" data-canonical-src="https://img.shields.io/npm/v/instantsearch.js.svg?style=flat-square" style="max-width:100%;"></a>
<a href="/algolia/instantsearch.js/blob/develop/LICENSE"><img src="https://camo.githubusercontent.com/9cb70ec0aa7060a245318542404a207da4e44782/687474703a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d677265656e2e7376673f7374796c653d666c61742d737175617265" alt="License" data-canonical-src="http://img.shields.io/badge/license-MIT-green.svg?style=flat-square" style="max-width:100%;"></a>
<a href="https://circleci.com/gh/algolia/instantsearch.js" rel="nofollow"><img src="https://camo.githubusercontent.com/e98c3b425ddf865c4d2ca4510ec4a2d8386ab1c8/68747470733a2f2f696d672e736869656c64732e696f2f636972636c6563692f70726f6a6563742f6769746875622f616c676f6c69612f696e7374616e747365617263682e6a732e7376673f7374796c653d666c61742d737175617265" alt="Build Status" data-canonical-src="https://img.shields.io/circleci/project/github/algolia/instantsearch.js.svg?style=flat-square" style="max-width:100%;"></a>
<a href="https://pullreminders.com?ref=badge" rel="nofollow"><img src="https://camo.githubusercontent.com/fbdde467a37c1b5c880fd1313cbffd065c5610ae/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f70756c6c25323072656d696e646572732d2545322539432539332d737563636573732e7376673f7374796c653d666c61742d737175617265" alt="Pull reminders" data-canonical-src="https://img.shields.io/badge/pull%20reminders-%E2%9C%93-success.svg?style=flat-square" style="max-width:100%;"></a></p>
<p>InstantSearch.js is a vanilla JavaScript library that lets you create an instant-search result experience using <a href="https://www.algolia.com/?utm_source=instantsearch.js&amp;utm_campaign=repository" rel="nofollow">Algolia</a>’s search API. It is part of the InstantSearch family:</p>
<p><strong>InstantSearch.js</strong> | <a href="https://github.com/algolia/react-instantsearch/">React InstantSearch</a> | <a href="https://github.com/algolia/vue-instantsearch">Vue InstantSearch</a> | <a href="https://github.com/algolia/angular-instantsearch">Angular InstantSearch</a> | <a href="https://github.com/algolia/react-instantsearch/">React InstantSearch Native</a> | <a href="https://github.com/algolia/instantsearch-android">InstantSearch Android</a> | <a href="https://github.com/algolia/instantsearch-ios">InstantSearch iOS</a></p>
<details>
  <summary><strong>Table of contents</strong></summary>


<ul>
<li><a href="#why">Why</a></li>
<li><a href="#getting-started">Getting started</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#documentation">Documentation</a></li>
<li><a href="#demos">Demos</a></li>
<li><a href="#playground">Playground</a></li>
<li><a href="#browser-support">Browser support</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#license">License</a></li>
</ul>

</details>
<h2><a id="user-content-why" class="anchor" aria-hidden="true" href="#why"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why</h2>
<p>You should be using InstantSearch if you want to:</p>
<ul>
<li>Design search experiences with best practices</li>
<li>Customize your components at will</li>
<li>Remain independent from external frameworks</li>
</ul>
<h2><a id="user-content-getting-started" class="anchor" aria-hidden="true" href="#getting-started"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h2>
<p>Using InstantSearch.js is as simple as adding this JavaScript code to your page:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> 1. Instantiate the search</span>
<span class="pl-k">const</span> <span class="pl-c1">search</span> <span class="pl-k">=</span> <span class="pl-en">instantsearch</span>({
  indexName<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>instant_search<span class="pl-pds">'</span></span>,
  searchClient<span class="pl-k">:</span> <span class="pl-en">algoliasearch</span>(<span class="pl-s"><span class="pl-pds">'</span>latency<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>6be0576ff61c053d5f9a3225e2a90f76<span class="pl-pds">'</span></span>),
});

<span class="pl-smi">search</span>.<span class="pl-en">addWidgets</span>([
  <span class="pl-c"><span class="pl-c">//</span> 2. Create an interactive search box</span>
  <span class="pl-smi">instantsearch</span>.<span class="pl-smi">widgets</span>.<span class="pl-en">searchBox</span>({
    container<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>#searchbox<span class="pl-pds">'</span></span>,
    placeholder<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Search for products<span class="pl-pds">'</span></span>,
  }),

  <span class="pl-c"><span class="pl-c">//</span> 3. Plug the search results into the product container</span>
  <span class="pl-smi">instantsearch</span>.<span class="pl-smi">widgets</span>.<span class="pl-en">hits</span>({
    container<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>#products<span class="pl-pds">'</span></span>,
    templates<span class="pl-k">:</span> {
      item<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}<span class="pl-pds">'</span></span>,
    },
  }),

  <span class="pl-c"><span class="pl-c">//</span> 4. Make the brands refinable</span>
  <span class="pl-smi">instantsearch</span>.<span class="pl-smi">widgets</span>.<span class="pl-en">refinementList</span>({
    container<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>#brand<span class="pl-pds">'</span></span>,
    attribute<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>brand<span class="pl-pds">'</span></span>,
  }),
]);

<span class="pl-c"><span class="pl-c">//</span> 5. Start the search!</span>
<span class="pl-smi">search</span>.<span class="pl-c1">start</span>();</pre></div>
<p align="center">
  <a href="https://codesandbox.io/s/github/algolia/doc-code-samples/tree/master/InstantSearch.js/getting-started" title="Edit on CodeSandbox" rel="nofollow">
    <img alt="Edit on CodeSandbox" src="https://camo.githubusercontent.com/416c7a7433e9d81b4e430b561d92f22ac4f15988/68747470733a2f2f636f646573616e64626f782e696f2f7374617469632f696d672f706c61792d636f646573616e64626f782e737667" data-canonical-src="https://codesandbox.io/static/img/play-codesandbox.svg" style="max-width:100%;">
  </a>
</p>
<p>To learn more about the library, follow the <a href="https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/" rel="nofollow">getting started</a> guide or check how to <a href="https://www.algolia.com/doc/guides/building-search-ui/installation/js/" rel="nofollow">add it to your own project</a>.</p>
<h2><a id="user-content-installation" class="anchor" aria-hidden="true" href="#installation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>
<div class="highlight highlight-source-shell"><pre>npm install instantsearch.js algoliasearch
<span class="pl-c"><span class="pl-c">#</span> or</span>
yarn add instantsearch.js algoliasearch</pre></div>
<h2><a id="user-content-documentation" class="anchor" aria-hidden="true" href="#documentation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>
<p>The documentation is available on the <a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/" rel="nofollow">Algolia website</a>.</p>
<h2><a id="user-content-demos" class="anchor" aria-hidden="true" href="#demos"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demos</h2>
<table>
<thead>
<tr>
<th>E-commerce</th>
<th>Media</th>
<th>Travel</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://instantsearchjs.netlify.com/examples/e-commerce/" rel="nofollow"><img src="https://camo.githubusercontent.com/91ff797e0a81fef8f6ef064f0dbe2dca33521e37/68747470733a2f2f7777772e616c676f6c69612e636f6d2f646f632f6173736574732f696d616765732f6275696c642d7365617263682d75692f64656d6f732f652d636f6d6d657263652d32633765643662362e706e67" width="250" alt="E-commerce demo preview" data-canonical-src="https://www.algolia.com/doc/assets/images/build-search-ui/demos/e-commerce-2c7ed6b6.png" style="max-width:100%;"></a></td>
<td><a href="https://instantsearchjs.netlify.com/examples/media/" rel="nofollow"><img src="https://camo.githubusercontent.com/cd6b409258e7dc3c2310898544702e7ccb5eb403/68747470733a2f2f696e7374616e747365617263686a732e6e65746c6966792e636f6d2f6578616d706c65732f6d656469612f636170747572652e706e67" width="250" alt="Media demo preview" data-canonical-src="https://instantsearchjs.netlify.com/examples/media/capture.png" style="max-width:100%;"></a></td>
<td><a href="https://instantsearchjs.netlify.com/examples/tourism/" rel="nofollow"><img src="https://camo.githubusercontent.com/a68168c5ea039321d8b7ff184165fbd9de76be06/68747470733a2f2f696e7374616e747365617263686a732e6e65746c6966792e636f6d2f6578616d706c65732f746f757269736d2f636170747572652e706e67" width="250" alt="Tourism demo preview" data-canonical-src="https://instantsearchjs.netlify.com/examples/tourism/capture.png" style="max-width:100%;"></a></td>
</tr>
</tbody>
</table>
<p>See more demos <a href="https://www.algolia.com/doc/guides/building-search-ui/resources/demos/js/" rel="nofollow">on the website</a>.</p>
<h2><a id="user-content-playground" class="anchor" aria-hidden="true" href="#playground"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Playground</h2>
<p>You can get to know InstantSearch.js on <a href="https://codesandbox.io/s/github/algolia/create-instantsearch-app/tree/templates/instantsearch.js" rel="nofollow">this playground</a>.</p>
<p>Start by <a href="https://www.algolia.com/doc/guides/building-search-ui/widgets/showcase/js/" rel="nofollow">adding widgets</a> and tweaking the display. Once you feel familiar with the library, we recommend following the <a href="https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/" rel="nofollow">getting started guide</a>.</p>
<h2><a id="user-content-browser-support" class="anchor" aria-hidden="true" href="#browser-support"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Browser support</h2>
<p>We support the <strong>last two versions of major browsers</strong> (Chrome, Edge, Firefox, Safari).</p>
<p>Please refer to the <a href="https://www.algolia.com/doc/guides/building-search-ui/installation/js/#browser-support" rel="nofollow">browser support</a> section in the documentation to use InstantSearch.js on other browsers.</p>
<h2><a id="user-content-contributing" class="anchor" aria-hidden="true" href="#contributing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>
<p>We welcome all contributors, from casual to regular <g-emoji class="g-emoji" alias="blue_heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f499.png">💙</g-emoji></p>
<ul>
<li><strong>Bug report</strong>. Is something not working as expected? <a href="https://github.com/algolia/instantsearch.js/issues/new?template=Bug_report.md">Send a bug report</a>.</li>
<li><strong>Feature request</strong>. Would you like to add something to the library? <a href="https://github.com/algolia/instantsearch.js/issues/new?template=Feature_request.md">Send a feature request</a>.</li>
<li><strong>Documentation</strong>. Did you find a typo in the doc? <a href="https://github.com/algolia/instantsearch.js/issues/new">Open an issue</a> and we'll take care of it.</li>
<li><strong>Development</strong>. If you don't know where to start, you can check the open issues that are <a href="https://github.com/algolia/instantsearch.js/issues?q=is%3Aopen+is%3Aissue+label%3A%22Difficulty%3A++++++%E2%9D%84%EF%B8%8F+easy%22">tagged easy</a>, the <a href="https://github.com/algolia/instantsearch.js/issues?q=is%3Aissue+is%3Aopen+label%3A%22%E2%9D%A4+Bug%22">bugs</a> or <a href="https://github.com/algolia/instantsearch.js/issues?q=is%3Aissue+is%3Aopen+label%3A%22%E2%9C%A8+Chore%22">chores</a>.</li>
</ul>
<p>To start contributing to code, you need to:</p>
<ol>
<li><a href="https://help.github.com/articles/fork-a-repo/">Fork the project</a></li>
<li><a href="https://help.github.com/articles/cloning-a-repository/">Clone the repository</a></li>
<li>Install the dependencies: <code>yarn</code></li>
<li>Run the development mode: <code>yarn start</code></li>
<li><a href="http://localhost:6006" rel="nofollow">Open the stories</a></li>
</ol>
<p>Please read <a href="/algolia/instantsearch.js/blob/develop/CONTRIBUTING.md">our contribution process</a> to learn more.</p>
<h2><a id="user-content-license" class="anchor" aria-hidden="true" href="#license"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>
<p>InstantSearch.js is <a href="/algolia/instantsearch.js/blob/develop/LICENSE">MIT licensed</a>.</p>


</article>
      </div>
  </div>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2019 GitHub, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-/VSJJF96vCzSgC6y09Z4FqzjjuXRWOKIq2twF0Nb5/v8xy4qzngnH6Au6TFwbmNN/lborYJsojEpgIbYjoGvHQ==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-fd548924.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-0mcBYsTTDNy016WuG7Zu/Pb5dsdoVzVb5FlxH4btAPKKyTBKn+5g6N6lXxmMo1WokYH8uOYuLpTgLjU29jSqcA==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-d2670162.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

