<?php

namespace App\Http\Controllers;

use App\Models\decorator;
use Illuminate\Http\Request;

class DecoreController extends Controller
{
    //
    function addDecore(Request $req)
    {
        $decore = new decorator();
        $decore->name = $req->input('name');
        $decore->file_path = $req->file('file')->store('products');
        $decore->description = $req->input('description');
        $decore->save();
        return $decore;

    }
    function getDecore()
    {
        return decorator::all();
    }
    function deleteDecore($id)
    {
        $result = decorator::where('id', $id)->delete();
        if ($result) {
            return ['result' => 'the result has been deleted'];
        } else {
            return ['result' => 'the result has not been deleted'];

        }
    }
    function getSingleDecore($id)
    {
        return decorator::find($id);

    }
    function editDecore($id, Request $req)
    {
        $decore = decorator::find($id);
        $decore->name = $req->input('name');
        if ($req->file('file')) {       //if image is not being sending by the user then don't throw the error

            $decore->file_path = $req->file('file')->store('products');
        }
        $decore->description = $req->input('description');
        $decore->save();
        return $decore;
    }
    function searchDecore($key)
    {
        return decorator::where('name', 'like', "%$key%")->get();
    }
}
