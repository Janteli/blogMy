import React, { useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form'

// controll from react-hook-form helps to reuse compnent in another
export default function RTE({ name, control, label }) {
    return (
        // <Editor
        // initialValue='default value'
        // init = {
        //     {branding: false,
        //     height: 500,
        //     menubar: true,
        //     plugins: [
        //         'adivlist autolink lists link image charmap print preview anchor',
        //         'searcherplace visualblocks code fullscreen',
        //         'insertdatetime media table paset code help wordcount'
        //     ],
        //     toolbar: 'undo redo | fromateselect | bold italic backcoor | \
        //     alignleft aligncenter outdent indent | remoceformat | help'
        //     }
        // }
        // >

        // </Editor>
        <div className='w-full'>


            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}  //parent component (which is calling this component can controll)
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        init={
                            {
                                branding: false,
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "image",
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "code",
                                    "help",
                                    "wordcount",
                                    "anchor",
                                ],
                                toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                            }}
                        onEditorChange={onChange}
                    />


                )}
                onEditor
            />
        </div>

    )
}


