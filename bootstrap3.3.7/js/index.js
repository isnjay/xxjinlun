





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-KDZfnHRZjn4xEe2VuPe5iA8c+O1aNoowrYTe3DQQR97UQDzf5HZ15My/ytImCLmX5X6kBM8kwtuUVj5H+DOZbA==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-7d09971c51977b60c6626362003ef38a.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-fIK6jWQTUE9Q/xOs3LiWASyuLsJUbfgmM5Gdj1VoCP8XD88SSLB0uptvoQpHx3joW2qTQH6pvQyuYm1RyOUqYQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-ba8b12de1e9ebea8ea2f0845d31a4e13.css" />
  
  
  <link crossorigin="anonymous" media="all" integrity="sha512-VxZgLPiRT4wMogNRwy9qVO15+ta9te/mxcvjePEjWO2b2X0gEhyzdPUdn+4AHiRMvxhOPuh5U2UA1DLmOXcKBQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/site-83dc1f7ebc9c7461fe1eab799b56c4c4.css" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>wmxfe/index.js at master · weimingxinas/wmxfe · GitHub</title>
    <meta name="description" content="GitHub is where people build software. More than 27 million people use GitHub to discover, fork, and contribute to over 80 million projects.">
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/17585166?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="weimingxinas/wmxfe" /><meta property="og:url" content="https://github.com/weimingxinas/wmxfe" /><meta property="og:description" content="wmxfe - 个人网站（持续更新维护）" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="1ED9:142A:6164A:93AA0:5AB5A96D" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="1ED9:142A:6164A:93AA0:5AB5A96D" /><meta name="octolytics-dimension-region_edge" content="1" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="hydro-events-url" content="https://github.com/hydro_browser_events" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ZWIxM2FlNGM4MjQ0ZjFiZjhhZGIzODIwNTNiZmQwZjFhZjgxNjY5NTM0MTMyMWNmMTUyNzFmMmYyYjg5Yjk5Nnx7InJlbW90ZV9hZGRyZXNzIjoiMTIwLjIzNi4xNzcuMTA3IiwicmVxdWVzdF9pZCI6IjFFRDk6MTQyQTo2MTY0QTo5M0FBMDo1QUI1QTk2RCIsInRpbWVzdGFtcCI6MTUyMTg1NDgzMSwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="1a07f896cce390e036c17f5a0a7ea0be604d8b3a">

  <meta http-equiv="x-pjax-version" content="1631d1fa42f023cdb1cf209de5b9214c">
  

      <link href="https://github.com/weimingxinas/wmxfe/commits/master.atom" rel="alternate" title="Recent Commits to wmxfe:master" type="application/atom+xml">

  <meta name="description" content="wmxfe - 个人网站（持续更新维护）">
  <meta name="go-import" content="github.com/weimingxinas/wmxfe git https://github.com/weimingxinas/wmxfe.git">

  <meta name="octolytics-dimension-user_id" content="17585166" /><meta name="octolytics-dimension-user_login" content="weimingxinas" /><meta name="octolytics-dimension-repository_id" content="83772360" /><meta name="octolytics-dimension-repository_nwo" content="weimingxinas/wmxfe" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="83772360" /><meta name="octolytics-dimension-repository_network_root_nwo" content="weimingxinas/wmxfe" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/weimingxinas/wmxfe/blob/master/dist/index.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features" href="/features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business" href="/business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace" href="/marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing" href="/pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scoped-search-url="/weimingxinas/wmxfe/search" data-unscoped-search-url="/search" action="/weimingxinas/wmxfe/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a class="header-search-scope no-underline" href="/weimingxinas/wmxfe/blob/master/dist/index.js">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s,/"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Fweimingxinas%2Fwmxfe%2Fblob%2Fmaster%2Fdist%2Findex.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      







  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fweimingxinas%2Fwmxfe"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/weimingxinas/wmxfe/watchers"
     aria-label="1 user is watching this repository">
    1
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fweimingxinas%2Fwmxfe"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/weimingxinas/wmxfe/stargazers"
      aria-label="0 users starred this repository">
      0
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fweimingxinas%2Fwmxfe"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/weimingxinas/wmxfe/network" class="social-count"
       aria-label="0 users forked this repository">
      0
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/weimingxinas">weimingxinas</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/weimingxinas/wmxfe">wmxfe</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /weimingxinas/wmxfe" href="/weimingxinas/wmxfe">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /weimingxinas/wmxfe/issues" href="/weimingxinas/wmxfe/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /weimingxinas/wmxfe/pulls" href="/weimingxinas/wmxfe/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /weimingxinas/wmxfe/projects" href="/weimingxinas/wmxfe/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /weimingxinas/wmxfe/pulse" href="/weimingxinas/wmxfe/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/weimingxinas/wmxfe/blob/03436a92ebb9cb2d062c2986de3b8f6835e92399/dist/index.js">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:246561d7b89feeaf474bc5583ae91725 -->

  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/weimingxinas/wmxfe/blob/master/dist/index.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/weimingxinas/wmxfe/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy
            for="blob-path"
            aria-label="Copy file path to clipboard"
            class="btn btn-sm BtnGroup-item tooltipped tooltipped-s"
            copied-label="Copied!">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/weimingxinas/wmxfe"><span>wmxfe</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/weimingxinas/wmxfe/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">index.js</strong>
    </div>
  </div>


  <include-fragment src="/weimingxinas/wmxfe/contributors/master/dist/index.js" class="commit-tease">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
      <img alt="" class="loader-loading float-left" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>

  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/weimingxinas/wmxfe/raw/master/dist/index.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/weimingxinas/wmxfe/blame/master/dist/index.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/weimingxinas/wmxfe/commits/master/dist/index.js">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    16.4 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var i={};return t.m=e,t.c=i,t.p=&quot;&quot;,t(0)}([function(e,exports,t){t(1),t(7),$(document).ready(function(){var e=$(window).height();$(&quot;#first_sec&quot;).css(&quot;height&quot;,e+&quot;px&quot;),$(window).scroll(function(){$(window).scrollTop()&gt;500?$(&quot;.fix_nav&quot;).show():($(&quot;#nav&quot;).show(),$(&quot;#nav&quot;).removeClass(&quot;fixed_top&quot;),$(&quot;.fix_nav&quot;).hide())});var t=!0;$(&quot;.fix_nav&quot;).on(&quot;click&quot;,function(){t?($(&quot;#nav&quot;).fadeIn(),$(&quot;#nav&quot;).addClass(&quot;fixed_top&quot;),t=!1,t||$(&quot;#nav&quot;).on(&quot;mouseleave&quot;,function(){$(&quot;#nav&quot;).hide(),$(&quot;#nav&quot;).removeClass(&quot;fixed_top&quot;),t=!0})):($(&quot;#nav&quot;).hide(),$(&quot;#nav&quot;).removeClass(&quot;fixed_top&quot;),t=!0)}),$(&quot;.htmleaf-container&quot;).jParticle({particlesNumber:100,linkDist:50,createLinkDist:150,disableLinks:!1,disableMouse:!1,background:&quot;black&quot;,color:&quot;white&quot;,width:null,height:null,linksWidth:1,particle:{color:&quot;white&quot;,minSize:2,maxSize:4,speed:60}}),$(&quot;.third_sec&quot;).hide(),$(&quot;.forth_sec&quot;).hide();var i=!0;$(&quot;#btn1&quot;).on(&quot;click&quot;,function(){var e=$(&#39;input[name=&quot;answer_one&quot;]:checked&#39;).val();if(&quot;option4&quot;===e){$(&quot;.third_sec&quot;).fadeIn(),i=!1,$(window).scrollTop($(&quot;.third_sec&quot;).offset().top);var t=0,n=$(&quot;.skill_item&quot;);n.css(&quot;visibility&quot;,&quot;hidden&quot;);var a=setInterval(function(){if(0==t||2==t?n.eq(t).css(&quot;visibility&quot;,&quot;visible&quot;).addClass(&quot;item_right&quot;):n.eq(t).css(&quot;visibility&quot;,&quot;visible&quot;).addClass(&quot;item_left&quot;),t++,t&gt;3)return clearInterval(a)},500);$(&quot;#error_msg_one&quot;).html(&quot;&quot;),$(&quot;#error_msg_one&quot;).append(&quot;You&#39;re pretty good &lt;/p&gt;&quot;)}else $(&quot;#error_msg_one&quot;).html(&quot;&quot;),$(&quot;#error_msg_one&quot;).append(&quot;&lt;p&gt;Please try again&lt;/p&gt;&quot;)}),$(&quot;#btn2&quot;).on(&quot;click&quot;,function(){var e=$(&#39;input[name=&quot;answer_two&quot;]:checked&#39;).val();i?$(window).scrollTop($(&quot;#skills&quot;).offset().top):&quot;option4&quot;===e?($(&quot;.forth_sec&quot;).fadeIn(),$(window).scrollTop($(&quot;.forth_sec&quot;).offset().top)):$(&quot;#error_msg_two&quot;).append(&quot;&lt;p&gt;Please try again&lt;/p&gt;&quot;)})});(function(){var e=!0,t=$(&quot;.thumbnail&quot;);t.css(&quot;visibility&quot;,&quot;hidden&quot;),$(window).scroll(function(){var i=0;if($(window).scrollTop()&gt;400&amp;&amp;e){var n=setInterval(function(){if(t.eq(i).css(&quot;visibility&quot;,&quot;visible&quot;).addClass(&quot;item_top&quot;),i++,i&gt;2)return clearInterval(n)},300);e=!1}})})(),function(){var e=!0,t=$(&quot;.flex&quot;).children().eq(0).children(),i=$(&quot;.flex&quot;).children().eq(2).children(),n=[],a=[],o=[];a.push(t),n.push(a[0]),o.push(i),n.push(o[0]),$(window).scroll(function(){var t=0;if($(window).scrollTop()&gt;3500&amp;&amp;e){var i=setInterval(function(){if(t&lt;3?$(n[0][t]).css(&quot;visibility&quot;,&quot;visible&quot;).addClass(&quot;item_top&quot;):$(n[1][5-t]).css(&quot;visibility&quot;,&quot;visible&quot;).addClass(&quot;item_top&quot;),t++,$(&quot;.yuan&quot;).html(&quot;&lt;p&gt;&lt;em&gt;&quot;+(7-t)+&quot;&lt;/em&gt;&lt;/p&gt;&quot;),t&gt;6)return $(&quot;.yuan&quot;).html(&quot;&lt;p&gt;Never Stop…&lt;br&gt;Keep Fighting&lt;/p&gt;&quot;),clearInterval(i)},1e3);e=!1}})}()},function(e,exports,t){var i=t(2);&quot;string&quot;==typeof i&amp;&amp;(i=[[e.id,i,&quot;&quot;]]);t(6)(i,{});i.locals&amp;&amp;(e.exports=i.locals)},function(e,exports,t){exports=e.exports=t(3)(),exports.push([e.id,&quot;body{margin:0;padding:0}.part{margin-bottom:75px}a:hover{cursor:pointer}.bounce{-webkit-animation:bounce 2s infinite;animation:bounce 2s infinite}@keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}.arrow{position:absolute;bottom:0;left:50%;margin-left:-20px;width:40px;height:40px;cursor:pointer}.arrow .glyphicon{font-size:35px}.fix_nav{width:30px;height:30px;position:fixed;margin-left:10%;color:#000;font-size:3rem;z-index:100;padding:15px;display:none}.fix_nav .glyphicon{color:#a6a9bc}.navbar-default{position:absolute;top:0;left:0;z-index:10;width:100%;background:none;padding-top:15px;border:0}.fixed_top{width:80%;position:fixed;z-index:99;border-radius:15px;margin-left:10%;background-color:#373737}.first_sec{width:100%;color:#1fce6d;height:100%;padding-top:70px;background-image:url(&quot;+t(4)+&quot;);background-size:cover;background-repeat:no-repeat;padding-bottom:62px}.first_sec_head{margin:0 auto;width:36%;display:flex;flex-flow:column wrap}.first_sec_head img{width:300px;margin:0 auto}.head_lock{display:none}.first_sec .first_sec_item{margin:0 auto;width:60%;height:60%}.first_sec_item{width:50%;height:50%;padding-left:30px;margin-top:-30px}.first_sec_item p{text-align:center;font-size:3.5vw;color:#fff;font-weight:700;margin-top:30px;font-family:Arial,Microsoft YaHei,\\\\9ED1\\4F53,\\\\5B8B\\4F53,sans-serif}.menuItem{margin-left:20px}.navbar-default .navbar-nav&gt;li&gt;a{color:#fff;font-family:Arial,Microsoft YaHei,\\\\9ED1\\4F53,\\\\5B8B\\4F53,sans-serif;font-size:20px}.navbar-default .navbar-nav&gt;li&gt;a:hover{color:#adadad}.glyphicon{font-size:30px;color:#fff}section h2{font-size:3.5em;font-weight:700;margin-bottom:15px}.second_sec img{width:256px;height:256px}.thumbnail{border:0}.thumbnail img{position:relative;border-radius:120px}.overlay{position:absolute;top:3px;left:32px;width:80%;height:64%;opacity:.3;background-color:hsla(0,0%,100%,.9);text-align:center;vertical-align:middle;transition:opacity 3s;display:none;border-radius:20px}.thumbnail:hover .overlay{display:block}.thumbnail .overlay p{font-size:7rem;margin-top:70px;height:auto}.thumbnail .caption h3,.thumbnail .overlay p{font-family:Arial,Microsoft YaHei,\\\\9ED1\\4F53,\\\\5B8B\\4F53,sans-serif}.thumbnail .caption h3{text-align:center;font-size:3rem;font-weight:700}.item_top{animation:topeaseinAnimate 1s ease 1;animation-fill-mode:forwards}@keyframes topeaseinAnimate{0%{transform:translateY(130px);opacity:0}to{transform:translateY(0);opacity:1}}.third_sec{background-color:#f3f2f3;background-image:url(&quot;+t(5)+&quot;);background-attachment:fixed;background-repeat:no-repeat;background-size:cover;padding-top:60px;color:#fff}.third_sec .container{padding-bottom:60px}.third_sec .back_img{border-radius:10px;padding-top:30px}.third_sec .skill_item{margin:0 auto;margin-bottom:20px;width:95%;display:flex;flex-flow:row nowrap}.third_sec .skill_item .skill_item_text{text-align:right;margin:0 30px 20px;padding-top:20px}.third_sec .skill_item .skill_item_img{padding-top:10px}.third_sec .skill_item .skill_item_img img{width:100px;height:100px;border-radius:50%}.third_sec .other{padding:20px 30px;width:90%;color:#fff}.item_right{animation:lefteaseinAnimate 1s ease 1;animation-fill-mode:forwards}.item_left{animation:righteaseinAnimate 1s ease 1;animation-fill-mode:forwards}.other h3{text-align:right}.other_left h3{text-align:left}@keyframes lefteaseinAnimate{0%{transform:translateX(-100px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes righteaseinAnimate{0%{transform:translateX(100px);opacity:0}to{transform:translateX(0);opacity:1}}.forth_sec{padding-top:60px;padding-bottom:40px;position:relative;margin-bottom:0;color:#edeaea}.forth_sec .flex{display:flex;flex-flow:row nowrap;justify-content:space-between;position:relative}.exp_first{width:250px;height:150px;position:relative;visibility:hidden}.exp_first p{margin:8px;font-size:1.3rem}.left{margin:10px 0 10px 140px}.exp_left .right{margin:10px 140px 10px 0}.flex .yuan{position:absolute;left:50%;top:60%;margin-left:-150px;margin-top:-150px;z-index:10;height:300px;width:300px;border-radius:150px;border:1px solid #000}.fifth_sec{margin-bottom:0;color:#2a2929;padding-top:60px}.fifth_left li{list-style:none;margin:10px}.fifth_left a{text-decoration:none}.fifth_left p{margin-top:70px}.fifth_left img{width:20px}.yuan p{font-size:3rem}.yuan em,.yuan p{margin:0 auto;text-align:center}.yuan em{font-size:150px}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.htmleaf-container canvas{position:absolute;left:0;top:0;z-index:-10;width:100%;height:100%}.center-block strong{margin:0 auto}footer strong{font-size:3rem;color:#000}.question{height:auto;width:100%;overflow:hidden;padding-top:100px}.question_one,.question_two{width:50%;font-size:20px;margin:0 auto;border-top:2px solid #36a7f1;padding-top:30px;color:#000}code{color:#000}.error_msg{color:red;font-size:2rem}&quot;,&quot;&quot;])},function(e,exports){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t&lt;this.length;t++){var i=this[t];i[2]?e.push(&quot;@media &quot;+i[2]+&quot;{&quot;+i[1]+&quot;}&quot;):e.push(i[1])}return e.join(&quot;&quot;)},e.i=function(t,i){&quot;string&quot;==typeof t&amp;&amp;(t=[[null,t,&quot;&quot;]]);for(var n={},a=0;a&lt;this.length;a++){var o=this[a][0];&quot;number&quot;==typeof o&amp;&amp;(n[o]=!0)}for(a=0;a&lt;t.length;a++){var r=t[a];&quot;number&quot;==typeof r[0]&amp;&amp;n[r[0]]||(i&amp;&amp;!r[2]?r[2]=i:i&amp;&amp;(r[2]=&quot;(&quot;+r[2]+&quot;) and (&quot;+i+&quot;)&quot;),e.push(r))}},e}},function(e,exports,t){e.exports=t.p+&quot;e0749f67ff3dba3d261de8b7d51f54b7.jpg&quot;},function(e,exports,t){e.exports=t.p+&quot;d2c13efb34ac0ce9248357dbae3c33e7.jpg&quot;},function(e,exports,t){function i(e,t){for(var i=0;i&lt;e.length;i++){var n=e[i],a=f[n.id];if(a){a.refs++;for(var o=0;o&lt;a.parts.length;o++)a.parts[o](n.parts[o]);for(;o&lt;n.parts.length;o++)a.parts.push(l(n.parts[o],t))}else{for(var r=[],o=0;o&lt;n.parts.length;o++)r.push(l(n.parts[o],t));f[n.id]={id:n.id,refs:1,parts:r}}}}function n(e){for(var t=[],i={},n=0;n&lt;e.length;n++){var a=e[n],o=a[0],r=a[1],s=a[2],l=a[3],c={css:r,media:s,sourceMap:l};i[o]?i[o].parts.push(c):t.push(i[o]={id:o,parts:[c]})}return t}function a(e,t){var i=h(),n=x[x.length-1];if(&quot;top&quot;===e.insertAt)n?n.nextSibling?i.insertBefore(t,n.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),x.push(t);else{if(&quot;bottom&quot;!==e.insertAt)throw new Error(&quot;Invalid value for parameter &#39;insertAt&#39;. Must be &#39;top&#39; or &#39;bottom&#39;.&quot;);i.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t&gt;=0&amp;&amp;x.splice(t,1)}function r(e){var t=document.createElement(&quot;style&quot;);return t.type=&quot;text/css&quot;,a(e,t),t}function s(e){var t=document.createElement(&quot;link&quot;);return t.rel=&quot;stylesheet&quot;,a(e,t),t}function l(e,t){var i,n,a;if(t.singleton){var l=v++;i=g||(g=r(t)),n=c.bind(null,i,l,!1),a=c.bind(null,i,l,!0)}else e.sourceMap&amp;&amp;&quot;function&quot;==typeof URL&amp;&amp;&quot;function&quot;==typeof URL.createObjectURL&amp;&amp;&quot;function&quot;==typeof URL.revokeObjectURL&amp;&amp;&quot;function&quot;==typeof Blob&amp;&amp;&quot;function&quot;==typeof btoa?(i=s(t),n=p.bind(null,i),a=function(){o(i),i.href&amp;&amp;URL.revokeObjectURL(i.href)}):(i=r(t),n=d.bind(null,i),a=function(){o(i)});return n(e),function(t){if(t){if(t.css===e.css&amp;&amp;t.media===e.media&amp;&amp;t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}function c(e,t,i,n){var a=i?&quot;&quot;:n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var o=document.createTextNode(a),r=e.childNodes;r[t]&amp;&amp;e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function d(e,t){var i=t.css,n=t.media;if(n&amp;&amp;e.setAttribute(&quot;media&quot;,n),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function p(e,t){var i=t.css,n=t.sourceMap;n&amp;&amp;(i+=&quot;\n/*# sourceMappingURL=data:application/json;base64,&quot;+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+&quot; */&quot;);var a=new Blob([i],{type:&quot;text/css&quot;}),o=e.href;e.href=URL.createObjectURL(a),o&amp;&amp;URL.revokeObjectURL(o)}var f={},u=function(e){var t;return function(){return&quot;undefined&quot;==typeof t&amp;&amp;(t=e.apply(this,arguments)),t}},m=u(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),h=u(function(){return document.head||document.getElementsByTagName(&quot;head&quot;)[0]}),g=null,v=0,x=[];e.exports=function(e,t){t=t||{},&quot;undefined&quot;==typeof t.singleton&amp;&amp;(t.singleton=m()),&quot;undefined&quot;==typeof t.insertAt&amp;&amp;(t.insertAt=&quot;bottom&quot;);var a=n(e);return i(a,t),function(e){for(var o=[],r=0;r&lt;a.length;r++){var s=a[r],l=f[s.id];l.refs--,o.push(l)}if(e){var c=n(e);i(c,t)}for(var r=0;r&lt;o.length;r++){var l=o[r];if(0===l.refs){for(var d=0;d&lt;l.parts.length;d++)l.parts[d]();delete f[l.id]}}}};var b=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join(&quot;\n&quot;)}}()},function(e,exports){!function(e){&quot;use strict&quot;;var t,i;i={},e.fn.jParticle=function(i){return this.each(function(n,a){&quot;object&quot;==typeof a.sandbox&amp;&amp;e(a).removeJParticle(),a.sandbox=t(a,i)}),this},e.fn.removeJParticle=function(){return this.each(function(e,t){t.sandbox&amp;&amp;(t.sandbox.remove(),delete t.sandbox)}),this},e.fn.freezeJParticle=function(){return this.each(function(e,t){t.sandbox&amp;&amp;t.sandbox.freeze()}),this},e.fn.unfreezeJParticle=function(){return this.each(function(e,t){t.sandbox&amp;&amp;t.sandbox.unfreeze()}),this},t=function(t,n){var a,o;return a={},a.canvas={},a.mouse={},a.particles=[],a.isAnimated=!1,a.initialize=function(e,t){a.initParams(t),a.initHTML(e),a.initParticles(),a.initEvents(),a.initAnimation()},a.initParams=function(t){t&amp;&amp;t.color&amp;&amp;(!t.particle||t.particle&amp;&amp;!t.particle.color)&amp;&amp;(t.particle||(t.particle={}),t.particle.color=t.color),a.params=e.extend({particlesNumber:100,linkDist:50,createLinkDist:150,disableLinks:!1,disableMouse:!1,background:&quot;black&quot;,color:&quot;white&quot;,width:null,height:null,linksWidth:1},t)},a.initHTML=function(t){var i;i=a.canvas,i.container=e(t),i.element=e(&quot;&lt;canvas/&gt;&quot;),i.context=i.element.get(0).getContext(&quot;2d&quot;),i.container.append(i.element),i.element.css(&quot;display&quot;,&quot;block&quot;),i.element.get(0).width=a.params.width?a.params.width:i.container.width(),i.element.get(0).height=a.params.height?a.params.height:i.container.height(),i.element.css(&quot;background&quot;,a.params.background)},a.resize=function(e,t){e&amp;&amp;(canvas.element.get(0).width=e),t&amp;&amp;(canvas.element.get(0).height=t)},a.initParticles=function(){var e,t;for(e=0,t=a.params.particlesNumber;t&gt;e;e+=1)a.particles.push(o(a.canvas.element.get(0),a.params.particle))},a.initEvents=function(){a.canvas.element.mouseenter(function(){a.mouse.hoverCanvas=!0,a.isAnimated||a.draw()}),a.canvas.element.mouseleave(function(){a.mouse.hoverCanvas=!1}),a.canvas.element.mousemove(function(t){a.mouse=e.extend(a.mouse,i.getMousePosition(t,a.canvas.element[0]))})},a.initAnimation=function(){window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.ORequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeOut(e,1e3/60)},a.isAnimated=!0,a.draw()},a.draw=function(){var e,t,i,n,o,r;for(e=0,i=a.particles.length,n=a.canvas,n.context.clearRect(0,0,n.element.get(0).width,n.element.get(0).height);i&gt;e;e+=1)if(o=a.particles[e],a.isAnimated&amp;&amp;o.update(),o.draw(),!a.params.disableMouse&amp;&amp;a.mouse.hoverCanvas&amp;&amp;a.drawLink(o.getPosition(&quot;x&quot;),o.getPosition(&quot;y&quot;),a.mouse.x,a.mouse.y),!a.params.disableLinks)for(t=e+1;i&gt;t;t+=1)r=a.particles[t],a.drawLink(o.getPosition(&quot;x&quot;),o.getPosition(&quot;y&quot;),r.getPosition(&quot;x&quot;),r.getPosition(&quot;y&quot;));a.requestID=window.requestAnimFrame(a.draw)},a.drawLink=function(e,t,n,o){var r;i.getDistance(e,t,n,o)&lt;=a.params.createLinkDist&amp;&amp;(r=a.canvas.context,r.save(),r.beginPath(),r.lineWidth=a.params.linksWidth,r.moveTo(e,t),r.lineTo(n,o),r.globalAlpha=a.getOpacityLink(e,t,n,o),r.strokeStyle=a.params.color,r.lineCap=&quot;round&quot;,r.stroke(),r.closePath(),r.restore())},a.getOpacityLink=function(e,t,n,o){var r,s,l,c;return r=i.getDistance(e,t,n,o),l=a.params.linkDist,c=a.params.createLinkDist,s=l&gt;=r?1:r&gt;c?0:1-100*(r-l)/(c-l)/100},a.freeze=function(){a.isAnimated&amp;&amp;(a.isAnimated=!1)},a.unfreeze=function(){a.isAnimated||(a.isAnimated=!0)},a.remove=function(){a.canvas.element.remove()},o=function(t,n){var a;return a={},a.canvas={},a.vector={},a.initialize=function(t,i){a.params=e.extend({color:&quot;white&quot;,minSize:2,maxSize:4,speed:60},i),a.setCanvasContext(t),a.initSize(),a.initPosition(),a.initVectors()},a.initPosition=function(){a.x=i.getRandNumber(0+a.radius,a.canvas.element.width-a.radius),a.y=i.getRandNumber(0+a.radius,a.canvas.element.height-a.radius)},a.initSize=function(){a.size=i.getRandNumber(a.params.minSize,a.params.maxSize),a.radius=a.size/2},a.initVectors=function(){do a.vector.x=i.getRandNumber(-a.params.speed/60,a.params.speed/60,!1),a.vector.y=i.getRandNumber(-a.params.speed/60,a.params.speed/60,!1);while(0==a.vector.x||0==a.vector.y)},a.setCanvasContext=function(e){var t;if(a.canvas.element=e,t=e.getContext(&quot;2d&quot;),&quot;object&quot;!=typeof t||&quot;object&quot;!=typeof t.canvas)throw&quot;Error: Can&#39;t set canvas context to Particle because context isn&#39;t a CanvasRenderingContext2D object.&quot;;a.canvas.context=t},a.draw=function(){var e=a.canvas.context;e.beginPath(),e.arc(a.x,a.y,a.size/2,0,2*Math.PI),e.fillStyle=a.params.color,e.fill(),e.closePath()},a.update=function(){a.x+=a.vector.x,a.y+=a.vector.y,(0&gt;a.x-a.radius||a.x+a.radius&gt;a.canvas.element.width)&amp;&amp;(a.vector.x=-a.vector.x),(0&gt;a.y-a.radius||a.y+a.radius&gt;a.canvas.element.height)&amp;&amp;(a.vector.y=-a.vector.y)},a.getPosition=function(e){return&quot;string&quot;==typeof e&amp;&amp;&quot;x&quot;!=e&amp;&amp;&quot;y&quot;!=e&amp;&amp;(e=null),&quot;string&quot;==typeof e?a[e]:{x:a.x,y:a.y}},a.initialize(t,n),{getPosition:a.getPosition,update:a.update,draw:a.draw}},a.initialize(t,n),{remove:a.remove,freeze:a.freeze,unfreeze:a.unfreeze,resize:a.resize}},i.getRandNumber=function(e,t,i){var n;return null==e&amp;&amp;(e=0),null==t&amp;&amp;(t=10),null==i&amp;&amp;(i=!0),n=Math.random()*(t-e)+e,i?Math.round(n):n},i.getDistance=function(e,t,i,n){return Math.sqrt(Math.pow(i-e,2)+Math.pow(n-t,2))},i.getMousePosition=function(t,i){var n;return&quot;undefined&quot;==typeof i&amp;&amp;(i=e(&quot;body&quot;)[0]),n=i.getBoundingClientRect(),{x:t.clientX-n.left,y:t.clientY-n.top}}}(jQuery)}]);</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy class="dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" href="/weimingxinas/wmxfe/blame/03436a92ebb9cb2d062c2986de3b8f6835e92399/dist/index.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" href="/weimingxinas/wmxfe/issues/new">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.20277s from unicorn-3771497025-xsp9q">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to blog, text:blog" href="https://github.com/blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha512-UY14WNvBolNxGQwXsQ1s2vWj1UrqdF0OKpjniFCKTznZjhrFGYe5sNXbmS2n4Xx/Ijr/MEDVnzt+zn2bmDHhMA==" type="application/javascript" src="https://assets-cdn.github.com/assets/compat-af4f19572e1d43f69746f70aa5f01dc9.js"></script>
    <script crossorigin="anonymous" integrity="sha512-x/h5ncgWPzwaiT/CAUIhkfXDKF+ES1Raml0STig3oMzQln1y7i6VznM1lTo0TM5JfY8pIp9zc9kcyBFS2q/r9Q==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-70361af718ac8e05b3aaf9cf0c4cc8bd.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-HS4d3n5WkIYOTT9HXVuOq3igkAk9ZqE/jvWGBvNF9F5AE68WUlKAkywzRNn3v+BcwKqPtwoNhyr3JRA7bHxePQ==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-6df5d6f70023b7d0db8303ef9484889c.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large px-3 pb-3 my-3" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

