<?php

namespace App\Http\Controllers;

use App\Models\product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    function addProduct(Request $req)
    {
        $product = new product();
        $product->name = $req->input('name');
        $product->price = $req->input('price');
        $product->description = $req->input('description');
        $product->file_path = $req->file('file')->store('products');
        $product->save();
        return $product;
    }
    function list()
    {
        return product::all();
    }
    function delete($id)   //function for deleting the product
    {
        $result = product::where('id', $id)->delete();
        if ($result) {
            return ["result" => "product has been deleted"];
        } else {
            return ["result" => "operation failed"];
        }
    }
    function getProduct($id)
    {        //getting the single product
        return product::find($id);
    }
    // ************************* Update product controller ****************************************
    function updateProduct($id, Request $req)
    {
        // return $req->input();
        $product = product::find($id);
        $product->name = $req->input('name');
        $product->price = $req->input('price');
        $product->description = $req->input('description');
        if ($req->file('file')) {       //if image is not being sending by the user then don't throw the error
            $product->file_path = $req->file('file')->store('products');
        }
        $product->save();
        return $product;
    }
    function search($key)
    {
        return product::where('name', 'like', "%$key%")->get();

    }
}
