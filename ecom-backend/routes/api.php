<?php

use App\Http\Controllers\CountController;
use App\Http\Controllers\DecoreController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\VenueController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Register Route 
Route::post('register', [MemberController::class, 'register']);
Route::post('login', [MemberController::class, 'login']);
// *********** Add product to the databse api **************************************
Route::post('addproduct', [ProductController::class, 'addProduct']);
Route::get('productlist', [ProductController::class, 'list']);
// ****************** delete products route *************************************
Route::delete('delete/{id}', [ProductController::class, 'delete']);
// ****************** getting the single products route *************************************
Route::get('product/{id}', [ProductController::class, 'getproduct']);
// ****************** Updating the  products route *************************************
Route::put('updateproduct/{id}', [ProductController::class, 'updateProduct']);
// ****************** Searching the  products route *************************************
Route::get('search/{key}', [ProductController::class, 'search']);


// ************************************* Routes For Event Management ***************************************
// ******************** add event Route ********************************
Route::post('addevent', [EventController::class, 'addEvent']);
// ********************* get event Route *********************************
Route::get('getevent', [EventController::class, 'getEvent']);
// ********************* delete event Route *********************************
Route::delete('deleteevent/{id}', [EventController::class, 'deleteevent']);
// ********************* Getting single event Route *********************************
Route::get('getsingleevent/{id}', [EventController::class, 'getSingleEvent']);
// ********************* Update  event Route *********************************
Route::put('updateevent/{id}', [EventController::class, 'updateEvent']);
// ****************** Searching the  EVENT route *************************************
Route::get('searchevent/{key}', [EventController::class, 'search']);
// ************************ Route for Add Venue *********************************
Route::post('addvenue', [VenueController::class, 'addVenue']);
// ************************ Route for Get Venue *********************************
Route::get('getvenue', [VenueController::class, 'getVenue']);
// ************************ Route for Delete Venue *********************************
Route::delete('deletevenue/{id}', [VenueController::class, 'deleteVenue']);
// ************************ Route for getting single Venue *********************************
Route::get('getsinglevenue/{id}', [VenueController::class, 'getSingleVenue']);
// ************************ Route for Updating  Venue *********************************
Route::put('updatevenue/{id}', [VenueController::class, 'updateVenue']);
// ********************************** Route for Searching the event **************************
Route::get('searchvenue/{key}', [VenueController::class, 'searchVenue']);
// ******************************** Route for Adding DECORE controller ****************************
Route::post('adddecore', [DecoreController::class, 'addDecore']);
// ******************************* Api for Getting Decore ******************************
Route::get('getdecore', [DecoreController::class, 'getDecore']);
// ************************************* Route for Delete Decore *****************************
Route::delete('deletedecore/{id}', [DecoreController::class, 'deleteDecore']);
// ************************************* Route for Getting single Decore *****************************
Route::get('getsingledecore/{id}', [DecoreController::class, 'getSingleDecore']);
// ************************************* Route for editing single Decore *****************************
Route::put('editdecore/{id}', [DecoreController::class, 'editDecore']);
// ****************************** Search Decore ******************************************
Route::get('searchdecore/{key}', [DecoreController::class, 'searchDecore']);
// ***************************** send order to databse ********************************* 
Route::post('addorder', [OrderController::class, 'addOrder']);
//************************************* Api for counting ******************************* */
Route::get('countevent', [CountController::class, 'countEvent']);
Route::get('countdecorator', [CountController::class, 'countDecorator']);
Route::get('countvenue', [CountController::class, 'countVenue']);
Route::get('countorders', [CountController::class, 'countOrders']);
Route::get('subtotal', [CountController::class, 'subTotal']);
// **************************** api for order **********************************
Route::post('addorder', [OrderController::class, 'addOrder']);
Route::get('getorder', [OrderController::class, 'fetchOrder']);