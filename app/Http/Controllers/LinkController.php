<?php

namespace App\Http\Controllers;

use App\Models\Link;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class LinkController extends Controller
{
    public $link;
    public $linkId;

    public function generateLink(Request $request)
    {
        $this->linkId = Str::random(6);
        while (Link::where('short', $this->linkId)->first()) {
            $this->linkId = Str::random(6);
        }
        $this->link = Link::create([
            'original' => $request->url,
            'short' => sprintf("%s/%s", env("APP_URL"), $this->linkId),
            'short_id' => $this->linkId
        ]);

        return response()->json(['message' => 'Created short link', 'link' => $this->link], 201);
    }

    public function redirectUrl($urlId) {
        $this->link = Link::where('short_id', $urlId)->firstOrFail();

        return Redirect::to($this->link->original);
    }
}
