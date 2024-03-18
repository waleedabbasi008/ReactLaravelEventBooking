<?php

namespace App\Http\Controllers;

use App\Models\event;
use App\Models\member;
use App\Models\decorator;
use App\Models\order;
use App\Models\venue;
use Illuminate\Http\Request;

class CountController extends Controller
{
    //
    function countEvent()
    {
        $event = event::count();
        return $event;
    }
    function countDecorator()
    {
        $decorator = decorator::count();
        return $decorator;
    }
    function countVenue()
    {
        $venue = venue::count();
        return $venue;
    }
    function countOrders()
    {
        $orders = order::count();
        return $orders;
    }
    function subTotal()
    {
        $event = event::count();
        $decorator = decorator::count();
        $venue = venue::count();
        $subTotal = $event + $decorator + $venue;
        return $subTotal;
    }
}
