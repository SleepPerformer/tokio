(function() {var implementors = {};
implementors["tokio"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio/executor/current_thread/struct.TaskExecutor.html\" title=\"struct tokio::executor::current_thread::TaskExecutor\">TaskExecutor</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio/runtime/struct.TaskExecutor.html\" title=\"struct tokio::runtime::TaskExecutor\">TaskExecutor</a>",];
implementors["tokio_executor"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio_executor/struct.DefaultExecutor.html\" title=\"struct tokio_executor::DefaultExecutor\">DefaultExecutor</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio_executor/park/struct.UnparkThread.html\" title=\"struct tokio_executor::park::UnparkThread\">UnparkThread</a>",];
implementors["tokio_io"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.BytesCodec.html\" title=\"struct tokio_io::codec::BytesCodec\">BytesCodec</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.LinesCodec.html\" title=\"struct tokio_io::codec::LinesCodec\">LinesCodec</a>","impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio_io/io/struct.AllowStdIo.html\" title=\"struct tokio_io::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt;","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.Builder.html\" title=\"struct tokio_io::codec::length_delimited::Builder\">Builder</a>",];
implementors["tokio_reactor"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio_reactor/struct.Handle.html\" title=\"struct tokio_reactor::Handle\">Handle</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio_reactor/struct.SetFallbackError.html\" title=\"struct tokio_reactor::SetFallbackError\">SetFallbackError</a>",];
implementors["tokio_threadpool"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio_threadpool/struct.Sender.html\" title=\"struct tokio_threadpool::Sender\">Sender</a>",];
implementors["tokio_timer"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio_timer/timer/struct.Handle.html\" title=\"struct tokio_timer::timer::Handle\">Handle</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()