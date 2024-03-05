<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\support\Facades\Hash;

class MemberController extends Controller
{
    //
    function register(Request $req)
    {
        $user = new User;
        $user->name = $req->input("name");
        $user->email = $req->input("email");
        $user->password = Hash::make($req->input('password'));
        $user->save();
        return $user;
    }
    function login(Request $req)
    {
        $user = User::where('email', $req->input('email'))->first();
        if (!$user || !Hash::check($req->password, $user->password)) {
            return ['error' => "email or password is not matched"];
        }
        return $user;
    }
}
