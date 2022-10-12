<?php

namespace Comeen\Zoom\Meeting;

use ComeenPlay\SdkPhp\Handlers\SlideHandler;
use ComeenPlay\SdkPhp\Interfaces\ISlide;
use ComeenPlay\SdkPhp\Interfaces\IDisplay;

class MeetingHandler extends SlideHandler
{
    public function fetch(ISlide $slide, IDisplay $display): void
    {
        $this->addSlide([
            'url' => 'https://node.dynamicscreen.services/zoom?meetingNumber=' .
                $slide->getOption('meeting_number') . '&userName=Comeen Play&userEmail=share@play.comeen.com&passWord=' .
                $slide->getOption('meeting_password')
        ]);
    }
}
