<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Models\Film;
use App\Transformers\FilmTransformer;


class FilmController extends BaseController
{
    protected $film;

    public function __construct(Film $film)
    {
        $this->film = $film;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $films =  $this->film->paginate(25);
        return $this->response->paginator($films, new FilmTransformer());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $film = $this->film->findOrFail($id);
        if (! $film) {
            return $this->response->errorNotFound();
        }

        return $this->response->item($film, new FilmTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = \Validator::make($request->input(), [
            'code' => 'required',
            'name' => 'required',
            'img' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->errorBadRequest($validator->messages());
        }

        $attributes = [
            'img' => $request->get('img'),
            'code' =>  $request->get('code'),
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'status' => $request->get('status'),
            'created_by' => 1,
        ];
        $this->film->create($attributes);

        return $this->response->created();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $film = $this->film->findOrFail($id);
        if (! $film) {
            return $this->response->errorNotFound();
        }

        $validator = \Validator::make($request->input(), [
            'code' => 'required',
            'name' => 'required',
            'img' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->errorBadRequest($validator->messages());
        }

        $film->code = $request->get('code');
        $film->name = $request->get('name');
        $film->description = $request->get('description');
        $film->status = $request->get('status');
        $film->img = $request->get('img');
        $film->update();

        return $this->response->noContent();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $film = $this->film->findOrFail($id);

        if (! $film) {
            return $this->response->errorNotFound();
        }

        if( !$film->delete() ) {
            return $this->response->errorInternal();
        }

        return $this->response->noContent();
    }


}
