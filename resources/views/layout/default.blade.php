<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <link rel="icon" href="{{ url('img/favicon.svg') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="description" content="@yield('description')" />
    <meta property="og:site_name" content="Shly">
    <meta property="og:title" content="Shly - @yield('title')">
    <meta property="og:description" content="@yield('description')">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="{{app()->getLocale()}}">
    <meta property="og:url" content="https://laravelsecrets.com/">
    <meta property="og:image" content="@yield('image')">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Shly - @yield('title')-@yield('description')">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Shly - @yield('title')">
    <meta name="twitter:image" content="@yield('image')">

    <title>Shly - @yield('title')</title>

    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/semantic.min.css') }}">
    <script src="{{ asset('js/semantic.min.js') }}"></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    @include('layout/navbar')
    @yield('content')
</div>
<script src="{{ asset('js/app.js') }}"></script>

@stack('script')

</body>
</html>
