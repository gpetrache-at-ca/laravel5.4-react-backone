<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class DemoController extends Controller
{
    public function index()
    {
        return view('pages.demo/index');
    }
}
