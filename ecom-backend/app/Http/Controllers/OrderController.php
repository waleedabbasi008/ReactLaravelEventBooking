<?php

namespace App\Http\Controllers;

use App\Models\order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //  
    function addOrder(Request $req)
    {
        $order = new order();
        $order->hostname = $req->input('hostname');
        $order->persons = $req->input('persons');
        $order->eventtype = $req->input('eventtype');
        $order->decoretype = $req->input('decoretype');
        $order->venuetype = $req->input('venuetype');
        $order->save();
        return $order;
    }
    function fetchOrder()
    {
        return order::all();
    }
}
