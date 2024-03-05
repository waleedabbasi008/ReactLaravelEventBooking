<?php

namespace App\Http\Controllers;

use App\Models\venue;
use Illuminate\Http\Request;

class VenueController extends Controller
{
    //
    function addVenue(Request $req)
    {
        $venue = new venue();
        $venue->location = $req->input('location');
        $venue->description = $req->input('description');
        $venue->file_path = $req->file('file')->store('products');
        $venue->save();
        return $venue;
    }
    function getVenue()
    {
        return venue::all();
    }
    function deleteVenue($id)
    {
        $result = venue::where('id', $id)->delete();
        if ($result) {
            return ['result' => 'result has been deleted'];
        } else {
            return ['result' => 'result has not been deleted'];

        }
    }
    function getSingleVenue($id)
    {
        return venue::find($id);
    }
    function updateVenue($id, Request $req)
    {
        $venue = venue::find($id);
        $venue->location = $req->input('location');
        $venue->description = $req->input('description');
        if ($req->file('file')) {
            $venue->file_path = $req->file('file')->store('products');
        }
        $venue->save();
        return $venue;


    }
    function searchVenue($key)
    {
        $result = venue::where('location', 'like', "%$key%")->get();
        return $result;
    }
}
