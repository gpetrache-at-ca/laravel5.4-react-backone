<html>
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{ URL::asset('/css/app.css') }}" />
        <script type="text/javascript" src="{{ URL::asset('/js/survey/manifest.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('/js/survey/vendor.js') }}"></script>
    </head>
    <body>
        <div id="body" class="container">
            @include('layouts.partials.header')
            <div class="container">
            @yield('content')
            </div>
            @include('layouts.partials.footer')
        </div>
        @include('layouts.partials.javascript')
    </body>
</html>
