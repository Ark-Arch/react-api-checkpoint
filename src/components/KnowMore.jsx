import React,{useEffect, useState} from 'react'

const KnowMore = ({username, subject})=> {
    const modalId = `modal-${username}-${subject}`;

    return (
        <>
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target={`#${modalId}`} style={{fontSize:'10px', backgroundColor:'gray'}}>
            More
            </button>

            <div class="modal fade" id={modalId} tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalLabel">More About {username}'s {subject} </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            IT IS WORKING!!!
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        </>        
    )
}

export default KnowMore