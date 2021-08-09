@extends('layouts.main')

@section('content')
    <div id="app">
      {{-- <example-component></example-component> --}}
      {{-- <employees-index></employees-index> --}}
        <router-view></router-view>
    </div>
@endsection
