<?php

namespace App\Http\Controllers;

use App\Models\event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    //
    function addEvent(Request $req)  //function to send the data in the database
    {
        $event = new event();
        $event->name = $req->input('name');
        $event->description = $req->input('description');
        $event->file_path = $req->file('file')->store('products');
        $event->save();
        return $event;
    }
    function getEvent()
    {    //function to get the data
        return event::all();
    }
    //function to delete the data
    function deleteevent($id)
    {
        $result = event::where('id', $id)->delete();
        if ($result) {
            return ['result' => "The result has been deleted"];
        } else {
            return ['result' => "Operation failed"];
        }
    }
    //function to get teh single event
    function getSingleEvent($id)
    {
        $result = event::find($id);
        return $result;
    }
    // ************************* Update Event controller ****************************************
    function updateEvent($id, Request $req)
    {
        // return $req->input();
        $event = event::find($id);
        $event->name = $req->input('name');
        $event->description = $req->input('description');
        if ($req->file('file')) {       //if image is not being sending by the user then don't throw the error
            $event->file_path = $req->file('file')->store('products');
        }
        $event->save();
        return $event;
    }
    // ***************************************** Search Event Controler ***********************************
    function search($key)
    {
        return event::where('name', 'like', "%$key%")->get();

    }
}
